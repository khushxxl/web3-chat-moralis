import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import Timeago from 'timeago-react'

const Message = ({ message }) => {
  const { user } = useMoralis()
  const isUserSender = message.get('ethAddress') === user.get('ethAddress')
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserSender && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserSender && 'order-last ml-2'}`}>
        <Avatar />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserSender
            ? 'rounded-br-none bg-pink-300'
            : 'rounded-br-none bg-blue-300'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>

      <Timeago
        datetime={message.createdAt}
        className={`text-[10px] italic text-gray-400 ${
          isUserSender && 'order-first pr-1'
        } `}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserSender ? 'text-pink-300' : 'text-blue-500'
        }`}
      >
        {message.get('userName')}
      </p>
    </div>
  )
}

export default Message
