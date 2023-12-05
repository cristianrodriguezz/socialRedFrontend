import Image from "./Image"
import User from "./User"


const Post = ( {user} ) => {
  return (
    <li className=" bg-bunker-card sm:p-2 rounded-xl flex flex-col gap-2">
      <User name={user.name} lastname={user.lastname}/>
      <Image userid={user.user_id} link={user.link}/>
    </li>
  )
}

export default Post