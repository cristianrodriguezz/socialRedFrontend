import { useState } from "react"
import axios from "axios"


const Upload = () => {
  const [file, setFile] = useState({
    title: '',
    photo: null,
    userId: JSON.parse(localStorage.getItem('respuestaServidor'))?.data?.user?.id ?? null
  })


  console.log(file)
  


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const apiUrl = `http://localhost:3000/api/photos/upload?userId=${file.userId}`;

    console.log(file.photo)

    const formData = new FormData()

    formData.append('photo', file.photo)
    formData.append('userId', file.userId )
  
    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  }
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input type="text" name="tilte" id="tilte" onChange={(e) => setFile({...file, title: e.target.value})}/>
      <input type="file" name="file" id="file" onChange={(e) => setFile({...file, photo: e.target.files[0]})}/>
      <button>Upload</button>
      <div className="grid w-full max-w-xs items-center gap-1.5">
  <label
    className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >Picture</label
  >
  <input
    className="flex w-full rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
    type="file"
    id="picture"
  />
</div>

  </form>
  )
}

export default Upload