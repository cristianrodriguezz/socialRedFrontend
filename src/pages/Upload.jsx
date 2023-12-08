import {  useState } from "react"
import axios from "axios"
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage"


const Upload = () => {
  const [file, setFile] = useState({
    title: '',
    photo: null,
    userId: getUserFromLocalStorage().id
  })
  const [loading , setLoading] = useState(false)


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
      setLoading(true)
      console.log(response.data);
    } catch (error) {
      setLoading(false)
      console.error('Error al realizar la solicitud:', error.message);
    }finally{
      setLoading(false)
    }
  }
  return (

    <form onSubmit={handleSubmit} className="text-bunker-white flex flex-col py-2 2xl:px-[40rem] xl:px-[20rem] lg:px-60 md:px-36 xs:px-24 px-3 items-center space-y-4 h-screen">
      <div className="rounded-lg border border-bunker-white shadow-sm w-full" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Upload Photo</h3>
          <p className="text-sm text-muted-foreground">Choose your photo to upload.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="file"
            >
              Select Photo
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="file"
              name="file"
              accept="image/*"
              multiple=""
              type="file"
              onChange={(e) => setFile({...file, photo: e.target.files[0]})}
            />
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-bunker-body bg-bunker-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-bunker-white/90 h-10 px-4 py-2 w-full"
            type="submit"
            disabled={loading}
          >
            Upload
          </button>
        </div>
      </div>
    </form>

  
  )
}

export default Upload