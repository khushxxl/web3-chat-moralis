import { useRef } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import Message from './Message'
import SendMessage from './SendMessage'
import { motion } from 'framer-motion'

const MINS_DURATION = 15

const Messages = () => {
  const endOfUserRef = useRef(null)
  const { user } = useMoralis()

  const { data, isLoading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION),
        ),
    [],
    { live: true },
  )

  return (
    <div className="pb-56">
      <div className="space-y-5 p-2">
        {data.map((message) => {
          return <Message key={message.id} message={message} />
        })}
      </div>
      <motion.div className="flex justify-center">
        <SendMessage endOfUserRef={endOfUserRef} />
      </motion.div>
      <div ref={endOfUserRef} className="text-center text-white">
        <p>You are up to date {user.getUsername()} 🚀</p>
      </div>
      <p className="text-center bottom-5 text-white">
        Last 15 mins messeages can only be seen
      </p>
    </div>
  )
}

export default Messages
