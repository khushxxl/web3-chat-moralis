import { useMoralis } from 'react-moralis'

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()
  const setUsername = () => {
    const userName = prompt(
      `Enter your new username (current: ${user.getUsername()}  )`,
    )
    if (!userName) return
    setUserData({ username: userName })
  }
  return (
    <div className="text-sm  right-5 top-5 text-white ">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change Username
      </button>
    </div>
  )
}

export default ChangeUsername
