import { useParams } from "react-router-dom"
import ListImage from "../components/ListImage"
import {  useFetchPhotosByUserName,  useFetchPhotosLikeByUserName } from "../hooks/fetchPhotos"
import { useState } from "react"
import PostIcon from "../icons/PostIcon"
import ListPosts from "../components/ListPosts"
import LikeIcon from "../icons/LikeIcon"
import Loading from "../components/Loading"



const Perfil = () => {
  const [ visibility, setVisibility ] = useState(true)
  const [showPublications, setShowPublications] = useState(true)
  const [showLikes, setShowLikes] = useState(false)
  const { username } = useParams()
  const { photos , loading } = useFetchPhotosByUserName(username)
  const { likePhoto } = useFetchPhotosLikeByUserName(username)

  const handleCheckBox = () => setVisibility(!visibility)

  const handleSelected = (e) => {
    if (e.target.name === 'listPosts') {
      setShowPublications(!showPublications);
      setShowLikes(false);
    } else if (e.target.name === 'listlike') {
      setShowLikes(!showLikes);
      setShowPublications(false);
    }
  }

  
  return (
    <section id="perfil">
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
            <label  className="text-bunker-white flex gap-2 justify-center items-center">
              <input type="checkbox" className="hidden" name="listPosts" id="listPosts" onChange={handleSelected}/>
              <PostIcon color={showPublications}/> 
              Publicaciones
            </label>
          </li>
          <li className="text-bunker-white">
            <label  className="text-bunker-white flex gap-2 justify-center items-center">
              <input type="checkbox" className="hidden" name="listlike" id="listlike" onChange={handleSelected}/>
              <LikeIcon color={showLikes}/> 
              Me gustas
            </label>
          </li>
        </ul>
      </nav>
        {loading ? (
          <div className="h-screen bg-bunker-body flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          showPublications ? (
            <ListImage loading={loading} photos={photos} visibility={visibility} />
          ) : (
            <ListPosts user={likePhoto} />
          )
        )}
    </section>
  )
}

export default Perfil