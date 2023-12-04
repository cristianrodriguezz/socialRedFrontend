import ListImage from "../components/ListImage"
import Upload from "../components/Upload"
import { useFetchPhotosByUser } from "../hooks/fetchPhotos"



const Perfil = () => {
  const userId = JSON.parse(localStorage.getItem('respuestaServidor'))?.data?.user?.id ?? null
  const { photos } = useFetchPhotosByUser(userId)

  return (
    <section>
      <Upload/>
      <ListImage photos={photos}/>
    </section>
  )
}

export default Perfil