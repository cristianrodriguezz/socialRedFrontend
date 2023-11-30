import { useEffect, useState } from "react";

export const useFetchPhotosByUser = (userId) => {
  const [photos, setPhotos] = useState([])
  const getPhotos = async (userId) => {

    console.log(userId)
    try {
      const response = await fetch(`http://localhost:3000/api/photos/getphotos?userId=${userId}`,);
      
      const data = await response.json();
      setPhotos(data); // Ahora se ejecutará después de actualizar el estado
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }
  useEffect(() =>{
    getPhotos(userId)
  },[userId])

  return { photos }

}

export const useFetchRandmonPhotos = (limit, page, recargar) => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  console.log(page)
  console.log(photos)
  console.log(limit)
  const getPhotos = async () => {

    setLoading(true)
    try {
      const response = await fetch(`http://localhost:3000/api/photos/getRandomPhotos?page=${page}&limit=${limit}`);
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
  };


  useEffect(() =>{
    getPhotos()
  },[page, recargar])



  return { photos, loading }

}



