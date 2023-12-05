import { Link, useHref } from "react-router-dom"
import Logo from "../icons/Logo"
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";
import User from "./User";


const Header = () => {
  const user = getUserFromLocalStorage()
  const href = useHref()



  return (
    <header  className="flex justify-between items-center py-2 2xl:px-[40rem] xl:px-[20rem] lg:px-60 md:px-36 xs:px-24 px-3 sticky top-0 left-0 ">
      <Link to='/'>
        <Logo/>
      </Link>
      <nav className="list-none text-[#fff] ">
        <li>
          {user && <Link to='/perfil'><User name={user.name} lastname={user.lastname}/></Link>}
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