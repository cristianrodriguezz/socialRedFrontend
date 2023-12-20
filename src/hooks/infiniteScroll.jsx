import { useEffect, useState } from "react";

export const useInfiniteScroll = ({ initialPage = 1, initialLimit = 5, limitPage = 4 }) => {

  const [limit] = useState(initialLimit)
  const [page, setPage] = useState(initialPage)

  const isScrollAtBottom = () => {
    const scrollTop = window.scrollY || window.pageYOffset
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    return scrollTop + clientHeight >= scrollHeight
  }

  const handleScroll = () => {
    if (isScrollAtBottom() && page < limitPage) {
      if (page < limitPage) {
        setPage((prev) => prev + 1);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [page])

  return { page, limit }
};
