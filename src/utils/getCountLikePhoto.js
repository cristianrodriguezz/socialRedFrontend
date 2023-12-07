export const getCountLikePhoto = async (photoId) => {
  const URL = import.meta.env.VITE_BACKEND_URL
  const response = await fetch(`${URL}api/photos/count?photoId=${photoId}`);
  const data = await response.json();
  return data
}