import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'
import { motion } from 'framer-motion'

const Header = () => {
  const { user } = useMoralis()
  return (
    <div className="sticky top-1 z-50 bg-black p-5 rounded-xl ">
      <div className=" flex items-center justify-center  ">
        <div className="lg:text-center">
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="h-48 w-48  transition-all hover:scale-105 rounded-full border-white border-8 lg:mx-auto "
          >
            <Avatar logoutOnPress />
          </motion.div>

          <h1 className="text-white text-3x mt-10">
            Welcome to the Metaverse 🚀
          </h1>
          <h1 className="text-white text-5xl font-bold truncate">
            {user.getUsername()}
          </h1>

          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header

{
  /* <div className="">
          <Image
            src="https://pbs.twimg.com/profile_images/1458835398319218703/oX3WAyP-_400x400.jpg"
            height={100}
            width={100}
            objectFit="cover"
            className="rounded-full h-10 w-10"
          />
          <p className="text-white text-start">
            Built by Khushaal Choithramani🚀
          </p>
        </div> */
}
