import { useParams } from "react-router-dom"
import ListImage from "../components/ListImage"
import Upload from "../components/Upload"
import { useFetchPhotosByUser } from "../hooks/fetchPhotos"



const Perfil = () => {
  const userId = JSON.parse(localStorage.getItem('respuestaServidor'))?.data?.user?.id ?? null
  const { photos } = useFetchPhotosByUser(userId)
  const { username } = useParams()

  console.log(username);

  return (
    <section>
      <Upload/>
      <ListImage photos={photos}/>
    </section>
  )
}

export default Perfil