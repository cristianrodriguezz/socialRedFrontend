export const likePhoto = async (userId) => {
  const URL = import.meta.env.VITE_BACKEND_URL
  const response = await fetch(`${URL}api/photos/likes?userId=${userId}`)
  const data = await response.json()
  return data
}