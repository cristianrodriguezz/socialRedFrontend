

// eslint-disable-next-line react/prop-types
const Image = ( {userid, link} ) => {
  return (
    <img className="w-full h-full object-cover shadow-md rounded-lg" alt={userid} src={link} key={userid} loading="lazy"/>
  )
}

export default Image