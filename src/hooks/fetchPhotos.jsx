import { useEffect, useState } from "react";
import { getPhotosByUserName } from "../utils/getPhotoById";
import { getCountLikePhoto } from "../utils/getCountLikePhoto";
import { getLikePhotoByUser } from "../utils/getLikePhotoByUser";

export const useFetchPhotosByUserName = (username) => {

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)


  const getPhotos = async (username) => {
    try {
      const data = await getPhotosByUserName(username)
      setPhotos(data)
      
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() =>{getPhotos(username)},[username])

  return { photos, loading }
}
export const useFetchPhotosLikeByUserName = (username) => {

  const [likePhoto, setLikePhoto] = useState([])
  const [loading, setLoading] = useState(false)


  const getPhotos = async (username) => {
    try {
      const data = await getLikePhotoByUser(username)
      console.log(data);
      setLikePhoto(data)
      
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() =>{getPhotos(username)},[username])

  return { likePhoto, loading }
}

export const useFetchRandmonPhotos = (limit, page) => {
  const URL = import.meta.env.VITE_BACKEND_URL
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    const getPhotos = async () => {

      setLoading(true)
      
      try {
        const response = await fetch(`${URL}api/photos/getRandomPhotos?page=${page}&limit=${limit}`);
  
        const data = await response.json();
  
        const uniqueIds = new Set(photos.map(photo => photo.id));
  
        const newPhotos = data.filter(photo => !uniqueIds.has(photo.id));
  
        setPhotos((prevData) => [...prevData, ...newPhotos]);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setLoading(false)
      }finally{
        setLoading(false)
      }
    }
  
    getPhotos()
  },[page])

  return { photos, loading }

}

export const useFetchCountLikes = (photoId, isLikePhoto) => {
  const [likeCount, setLikesCount] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    const getCountLikes = async () => {

      setLoading(true)
      
      try {
        const response = await getCountLikePhoto(photoId)
  
        setLikesCount(response.length)
  
      } catch (error) {
        console.error('Error fetching photos:', error);
  
      }finally{
        setLoading(false)
      }
    }

    getCountLikes()
  },[photoId, isLikePhoto])


  return { likeCount, loading }
}



