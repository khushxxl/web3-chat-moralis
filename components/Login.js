import Image from 'next/image'
import { useMoralis } from 'react-moralis'

const Login = () => {
  const { authenticate } = useMoralis()
  return (
    <div className="">
      <div className="flex flex-col space-y-4 absolute z-50 w-full h-4/6 items-center justify-center ">
        {/* Logo  */}
        <Image
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
          className="rounded-full object-cover "
        />
        {/* <p> -Built by Khushaal Choithramani</p> */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-3 font-bold animate-pulse "
        >
          Login to Metaverse
        </button>
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
