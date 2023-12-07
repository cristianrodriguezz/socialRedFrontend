export const getPhoto = async (userId) => {
  const URL = import.meta.env.VITE_BACKEND_URL
  const response = await fetch(`${URL}api/photos/likes?userId=${userId}`)
  const data = await response.json()
  return data
}

export const likePhoto = async (userId, photoId, likeStatus) => {

  const URL = import.meta.env.VITE_BACKEND_URL

  const body = {
    userId,
    photoId
  }

  try {

    let response

    if(likeStatus){
      response = await fetch(`${URL}api/photos/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    }else{
      response = await fetch(`${URL}api/photos/dislike`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    }

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`)
    }


    const data = await response.json()
  
    return data

  } catch (error) {

    console.error('Error:', error.message)
    throw error

  }
}
