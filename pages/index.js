import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Login from '../components/Login'
import Messages from '../components/Messages'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />

  return (
    <div className=" h-screen overflow-y-scroll  bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden ">
      <Head>
        <title>Metaverse Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  )
}
