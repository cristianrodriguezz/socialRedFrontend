import ListImage from "../src/components/ListImage"
import Upload from "../src/components/Upload"
import { useFetchPhotosByUser } from "../src/hooks/fetchPhotos"


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