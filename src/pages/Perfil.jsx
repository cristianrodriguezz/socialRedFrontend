import { useParams } from "react-router-dom"
import ListImage from "../components/ListImage"
import Upload from "../components/Upload"
import {  useFetchPhotosByUserName } from "../hooks/fetchPhotos"
import { useState } from "react"



const Perfil = () => {
  const [visibility, setVisibility] = useState(false)
  const { username } = useParams()
  const { photos } = useFetchPhotosByUserName(username)

  const handleCheckBox = e => setVisibility(e.target.checked)

  console.log(visibility)


  return (
    <section id="perfil">
      <Upload/>
      <div className="flex justify-between items-center 2xl:px-[40rem] px-1 xl:px-[20rem] lg:px-60 md:px-36 xs:px-24">
        <h1 className=" text-bunker-white font-medium text-lg py-5">Gallery</h1>
        <label className="switch text-bunker-white flex gap-3 items-center">
          Vista
          <input type="checkbox" className="checkbox" name="visibility" id="visibility" onChange={handleCheckBox}/>
          <div className="slider"></div>
        </label>
      </div>
      <ListImage photos={photos} visibility={visibility}/>
    </section>
  )
}

export default Perfil