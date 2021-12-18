import Image from 'next/image'
import { useMoralis } from 'react-moralis'

const Avatar = ({ logoutOnPress, userName }) => {
  const { user, logout } = useMoralis()
  return (
    <Image
      className="rounded-full bg-black hover:opacity-75  cursor-pointer"
      src={`https://avatars.dicebear.com/api/avataaars/${
        userName || user.get('username')
      }.svg`}
      //   layout="fill"
      height={500}
      width={500}
      onClick={() => logoutOnPress && logout()}
    />
  )
}

export default Avatar
