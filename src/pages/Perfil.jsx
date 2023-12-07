import { useParams } from "react-router-dom"
import ListImage from "../components/ListImage"
import Upload from "../components/Upload"
import {  useFetchPhotosByUserName } from "../hooks/fetchPhotos"
import { useState } from "react"
import PostIcon from "../icons/PostIcon"
import ListPosts from "../components/ListPosts"
import { useFetchGetLikePhotosByUserName } from "../hooks/likePhoto"



const Perfil = () => {
  const [ visibility, setVisibility ] = useState(false)
  const { username } = useParams()
  const { photos } = useFetchPhotosByUserName(username)
  const { likePhoto } = useFetchGetLikePhotosByUserName(username)

  console.log(likePhoto);

  const handleCheckBox = e => setVisibility(e.target.checked)

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
      <nav className="flex justify-center items-center mb-5">
        <ul className="flex gap-5">
          <li className="text-bunker-white flex gap-2 justify-center items-center"><PostIcon/> Publicaciones</li>
          <li className="text-bunker-white">Me gustas</li>
        </ul>
      </nav>
      <ListPosts user={likePhoto}/>
      <ListImage photos={photos} visibility={visibility}/>
    </section>
  )
}

export default Perfil