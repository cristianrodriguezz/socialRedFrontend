import Avatar from "./Avatar"


const User = ({name, lastname, username}) => {

  const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1)
  const usernameUpperCase = lastname.charAt(0).toUpperCase() + lastname.slice(1)

  return (
    <div className="sm:w-60 text-bunker-white font-medium flex gap-3 items-center justify-start sm:p-4">
      <Avatar/>
      <div className="flex flex-col">
        <div className="flex gap-1">
          <p>{nameUpperCase}</p>
          <p>{usernameUpperCase}</p>
        </div>
          <p className="text-bunker-gray font-normal text-sm">@{username}</p>
      </div>
    </div>
  )
}

export default User