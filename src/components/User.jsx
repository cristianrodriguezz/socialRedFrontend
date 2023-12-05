import Avatar from "./Avatar"


const User = ({name, lastname}) => {
  return (
    <div className="sm:max-w-xs text-bunker-white font-medium flex gap-3 items-center justify-start p-4">
      <Avatar/>
      <div>
        <p>{name}</p>
        <p>{lastname}</p>
      </div>
    </div>
  )
}

export default User