import { useState } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import { motion } from 'framer-motion'

const SendMessage = ({ endOfUserRef }) => {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    if (!message) return
    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()
    messages
      .save({
        message: message,
        userName: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then((message) => {
        console.log(message)
        setMessage('')
      })
      .catch((e) => {
        console.log(e)
      })

    endOfUserRef.current.scrollIntoView({ behavor: 'smooth' })
  }
  return (
    <motion.form
      initial={{ x: -1200 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3 }}
      className="flex w-11/12 px-6 fixed bottom-10 bg-black
     max-w-2xl py-4 rounded-full shadow-xl border-2 border-blue-400"
    >
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        type="text"
        placeholder={`Enter your Message ${user.getUsername()} `}
        className="bg-transparent outline-none flex-grow text-white placeholder-gray-500"
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-white"
      >
        Send
      </button>
    </motion.form>
  )
}

export default SendMessage
