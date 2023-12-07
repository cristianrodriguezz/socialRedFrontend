import { useEffect, useState } from "react"
import { likePhoto } from "../utils/likePhoto"

export const useFetchLikePhotosByUserName = (userId) => {


  const [likes, setLikes] = useState([])
  const [loading, setLoading] = useState(false)


  const likesPhotos = async (userId) => {

    try {
      const data = await likePhoto(userId)

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

  // likes.some( like => like.)

  return { likes, loading }
}