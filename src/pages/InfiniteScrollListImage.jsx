import { useFetchRandmonPhotos } from "../hooks/fetchPhotos"
import Loading from "../components/Loading"
import { useInfiniteScroll } from "../hooks/infiniteScroll"
import ListPosts from "../components/ListPosts"
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage"
import Modal from "../components/Modal"


const InfiniteScrollListImage = () => {

  const { page, limit } = useInfiniteScroll({ 
    initialPage: 1,
    initialLimit: 5,
    limitPage: 4 
  })
  const user = getUserFromLocalStorage()

  const { photos, loading } = useFetchRandmonPhotos(limit, page)


  return (
    <>
      <ListPosts user={photos}/>
      <div className="flex items-center justify-center py-5">
        {loading ? <Loading/> : null}
      </div>
      <Modal notSession={user} >
        Inicia sesión para poder interactuar.
      </Modal>
    </>
  )
}

export default InfiniteScrollListImage