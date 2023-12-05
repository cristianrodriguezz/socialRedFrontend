export const getPhotosById = async (id) => {
  const URL = import.meta.env.VITE_BACKEND_URL
  const response = await fetch(`${URL}api/photos/getphotos?userId=${id}`);
  const data = await response.json();
  return data
}