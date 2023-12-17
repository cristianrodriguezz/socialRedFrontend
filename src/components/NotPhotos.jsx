import Camera from "../icons/Camera"


const NotPhotos = ( {children}) => {
  return (
    <div className="h-screen text-bunker-white">
      <Camera/>
      <p className="text-center font-semibold text-lg">{children}</p>
    </div>
  )
}

export default NotPhotos