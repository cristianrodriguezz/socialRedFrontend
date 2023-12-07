import { useParams } from "react-router-dom"
import ListImage from "../components/ListImage"
import Upload from "../components/Upload"
import {  useFetchPhotosByUserName,  useFetchPhotosLikeByUserName } from "../hooks/fetchPhotos"
import { useState } from "react"
import PostIcon from "../icons/PostIcon"
import ListPosts from "../components/ListPosts"
import LikeIcon from "../icons/LikeIcon"



const Perfil = () => {
  const [ visibility, setVisibility ] = useState(false)
  const [showPublications, setShowPublications] = useState(true)
  const { username } = useParams()
  const { photos } = useFetchPhotosByUserName(username)
  const { likePhoto } = useFetchPhotosLikeByUserName(username)

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
          <li className="">
            <label htmlFor="listPosts" className="text-bunker-white flex gap-2 justify-center items-center">
              <input type="checkbox" className="hidden" name="listPosts" id="listPosts" onChange={(e) => setShowPublications(e.target.checked)}/>
              <PostIcon color={showPublications}/> 
              Publicaciones
            </label>
          </li>
          <li className="text-bunker-white">
            <label htmlFor="listlike" className="text-bunker-white flex gap-2 justify-center items-center">
              <input type="checkbox" className="hidden" name="listlike" id="listlike" onChange={(e) => setShowPublications(e.target.checked)}/>
              <LikeIcon color={showPublications}/> 
              Me gustas
            </label>
          </li>
        </ul>
      </nav>
      { showPublications ?  <ListImage photos={photos} visibility={visibility}/> :  <ListPosts user={likePhoto}/> }
    </section>
  )
}

export default Perfil