import { useEffect } from "react"
import { useFetchRandmonPhotos } from "../hooks/fetchPhotos"
import ListImage from "./ListImage"
import Loading from "./Loading"
import { useInfiniteScroll } from "../hooks/infiniteScroll"


const InfiniteScrollListImage = () => {

  const { page, limit } = useInfiniteScroll({ 
    initialPage: 1,
    initialLimit: 5,
    limitPage: 4 
  })

  const { photos, loading } = useFetchRandmonPhotos(limit, page)

  return (
    <>
      <ListImage photos={photos}/>
      <div className="flex items-center justify-center py-5">
        {loading ? <Loading/> : null}
      </div>
    </>
  )
}

export default InfiniteScrollListImage