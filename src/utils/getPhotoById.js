export const getPhotosByUserName = async (username) => {
  const URL = import.meta.env.VITE_BACKEND_URL
  const response = await fetch(`${URL}api/photos/getPhotosByUserName?username=${username}`);
  const data = await response.json();
  return data
}