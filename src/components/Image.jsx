

const Image = ( {userid, link, onClick, className, }  ) => {
  return (
    <>
      <img  className={`w-full h-full object-cover shadow-md sm:rounded-lg ${className}`} onClick={onClick} alt={userid} src={link} key={userid} loading="lazy"/>
    </>
  )
}

export default Image