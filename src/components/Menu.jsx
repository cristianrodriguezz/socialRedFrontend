import { Link } from "react-router-dom"
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage"


const Menu = ({ open }) => {
  const user = getUserFromLocalStorage()
  return (
    <aside className={`${open ? 'menuOpen' : 'menu'}  mt-1 sm:mt-0`}>
      <nav className="sm:w-60 w-40 p-3 sm:p-4">
        <ul className="flex flex-col ">
        <Link to={`/${user?.username}`}><li className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">Perfil</li></Link>
        <Link to={'/config'}><li className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">Configuración</li></Link>
        <Link to='/upload'><li className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">Subir foto</li></Link>
          <li className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">Cerrar sesión</li>
        </ul>
      </nav>
    </aside>
  )
}

export default Menu