import { Link } from "react-router-dom"


const IniciarSesion = () => {
  return (
    <Link to='/login' className="py-2 px-3 w-full flex items-center justify-center bg-bunker-logo rounded-lg">
    Iniciar sesión
  </Link>
  )
}

export default IniciarSesion