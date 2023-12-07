import { useIsLikePhoto } from '../../hooks/likePhoto'
import getUserFromLocalStorage from '../../utils/getUserFromLocalStorage'
import { likePhoto } from '../../utils/likePhoto'
import './Like.css'

const Like = ({ likes, photoId }) => {
  const user = getUserFromLocalStorage()
  const { isLikePhoto, setIsLikePhoto } = useIsLikePhoto(likes, photoId)

  const handleClick = (e) => {  
    console.log(user.id);

    likePhoto(user.id, photoId)

    setIsLikePhoto(e.target.checked)
  }



  return (
    <div className='w-10 flex gap-1 text-bunker-white p-2'>
      <label className="container">
        <input type="checkbox" checked={isLikePhoto} name='like' onChange={handleClick}/>
        <div className="checkmark w-6">
          <svg viewBox="0 0 256 256">
          <rect fill="none" height="256" width="256"></rect>
          <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="20px" stroke="#FFF" fill="none"></path></svg>
        </div>
      </label>
      {likes?.length}
    </div>
  )
}

export default Like