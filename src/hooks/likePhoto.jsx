import { useEffect, useState } from "react"
import { getPhoto } from "../utils/likeOrDislikePhoto"

export const useFetchGetLikePhotosByUserName = (userId) => {


  const [likes, setLikes] = useState([])
  const [loading, setLoading] = useState(false)


  const likesPhotos = async (userId) => {

    try {
      const data = await getPhoto(userId)

      setLikes(data)
      
    } catch (error) {

      console.error('Error likes photo', error);

      setLoading(false)

    }finally{

      setLoading(false)

    }

  }
  useEffect(() =>{
    
    likesPhotos(userId)
    
  },[userId])

  return { likes, loading }
}

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
