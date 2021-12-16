import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />

  return (
    <div className="">
      <Head>
        <title>Metaverse Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Welcome to metaverse</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
