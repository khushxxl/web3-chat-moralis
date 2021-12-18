import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import meta from '../images/meta.png'
import { motion } from 'framer-motion'

const Login = () => {
  const { authenticate } = useMoralis()
  return (
    <div className="">
      <div className="flex flex-col space-y-4 mt-20 absolute z-50 w-full h-4/6 items-center justify-center ">
        {/* Logo  */}
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -400 }}
          transition={{ delay: 0.2 }}
          className="bg-black rounded-full p-6"
        >
          <Image
            src={meta}
            //   layout="fill"
            height={130}
            width={190}
            className=" object-cover "
          />
        </motion.div>

        {/* <p> -Built by Khushaal Choithramani</p> */}
        <motion.button
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-3 font-bold animate-pulse "
        >
          Login to Metaverse
        </motion.button>

        <div className="text-white text-center bg-black p-4 mt-10 rounded-xl ">
          <p>Full Stack Web3 Chat app</p>
          <p>Requirements to login : </p>
          <p>Metamask Account ✅ </p>
          <p>Chrome as your browser ✅</p>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
