import { useEffect, useState } from "react";
import { getPhotosById } from "../utils/getPhotoById";

export const useFetchPhotosByUser = (userId) => {

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)


  const getPhotos = async (userId) => {
    try {
      const data = await getPhotosById(userId)
      setPhotos(data)
      
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false)
    }finally{
      setLoading(false)
    }

  }
  useEffect(() =>{
    getPhotos(userId)
  },[userId])

  return { photos, loading }
}

export const useFetchRandmonPhotos = (limit, page) => {
  const URL = import.meta.env.VITE_BACKEND_URL
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

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

  useEffect(() =>{
    getPhotos()
  },[page])

  return { photos, loading }

}



