

const Image = ( {userid, link} ) => {
  return (
    <>
      <img className="w-full h-full object-cover shadow-md sm:rounded-lg" alt={userid} src={link} key={userid} loading="lazy"/>
    </>
  )
}

export default Image