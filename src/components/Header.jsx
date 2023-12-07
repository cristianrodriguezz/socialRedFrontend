import { Link } from "react-router-dom"
import Logo from "../icons/Logo"
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";
import User from "./User";

const Header = () => {
  const user = getUserFromLocalStorage()


  return (
    <header  className="flex justify-between items-center p-2 sm:py-2 sm:px-2 2xl:px-[40rem] xl:px-[20rem] lg:px-60 md:px-36 xs:px-24  sticky top-0 left-0 ">
      <Link to='/'>
        <Logo/>
      </Link>
      <nav className="list-none text-[#fff] ">
        <li>
          {user && <Link to={`/perfil/username/${user.username}`}><User name={user.name} lastname={user.lastname} username={user.username}/></Link>}
        </li>
        <li>
          {!user && <Link to='/register'>Registrate</Link>}
        </li>
        <li>
          {!user && <Link to='/login'>Iniciar sesión</Link>}
        </li>
      </nav>
    </header>
  )
}



export default Header