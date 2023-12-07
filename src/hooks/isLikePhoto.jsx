import { useEffect, useState } from "react"

export const useIsLikePhoto = (likes, photoId) => {
  
  const [isLikePhoto, setIsLikePhoto] = useState(false)

  const haveLike = (likes, photoId) => {

    if (Array.isArray(likes)) {
      setIsLikePhoto(likes.some((like) => like.photo_id === photoId));
    }
  }
  

  useEffect(() => {

    haveLike(likes,photoId)

  },[likes, photoId])

  return { isLikePhoto , setIsLikePhoto}

}