import { useFetchRandmonPhotos } from "../hooks/fetchPhotos"
import Loading from "./Loading"
import { useInfiniteScroll } from "../hooks/infiniteScroll"
import ListPosts from "./ListPosts"


const InfiniteScrollListImage = () => {

  const { page, limit } = useInfiniteScroll({ 
    initialPage: 1,
    initialLimit: 5,
    limitPage: 4 
  })

  const { photos, loading } = useFetchRandmonPhotos(limit, page)

  return (
    <>
      <ListPosts user={photos}/>
      <div className="flex items-center justify-center py-5">
        {loading ? <Loading/> : null}
      </div>
    </>
  )
}

export default InfiniteScrollListImage