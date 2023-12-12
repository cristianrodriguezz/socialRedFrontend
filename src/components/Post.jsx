import { useFetchGetLikePhotosByUserName } from "../hooks/likePhoto";
import Like from "../icons/Like/Like"
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";
import Image from "./Image"
import User from "./User"

const Post = ( {user} ) => {


  const userLocalStorage = getUserFromLocalStorage()

  const { likes } = useFetchGetLikePhotosByUserName(userLocalStorage?.id)

  return (
    <li className=" bg-bunker-card sm:p-2 rounded-xl flex flex-col gap-2">
      <div className="p-4 sm:p-0">
        <User name={user.name} lastname={user.lastname} username={user.username}/>
      </div>
      <Image userid={user.user_id} link={user.link}/>
      <Like likes={likes} photoId={user.id}/>
    </li>
  )
}

export default Post