import { useEffect, useState } from "react"
import { useFetchRandmonPhotos } from "../hooks/fetchPhotos"
import ListImage from "./ListImage"
import Loading from "./Loading"


const InfiniteScrollListImage = () => {
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)
  const [recargar, setRecargar] = useState(true)

  const { photos, loading } = useFetchRandmonPhotos(limit, page, recargar)

  console.log()

    const isScrollAtBottom = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
  
      return scrollTop + clientHeight >= scrollHeight;
    };

    const handleScroll = () => {
      if (isScrollAtBottom()) {
        console.log("Estás en el fondo de la ventana. Carga más contenido aquí.");
        if (page < 4) {
          setPage((prevPage) => prevPage + 1)
          setRecargar((prev) => !prev)
        }
      }
    };
    useEffect(() => {
    }, [photos])

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      // setData((prevData) => [...prevData, ...photos]);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [photos])

  return (
    <div>
      <ListImage photos={photos}/>
      <div className="flex items-center justify-center py-5">
        {loading ? <Loading/> : null}
      </div>
  </div>
  )
}

export default InfiniteScrollListImage