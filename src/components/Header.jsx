import { Link } from "react-router-dom"
import Logo from "../icons/Logo"
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";
import User from "./User";
import Menu from "./Menu";
import {  useState } from "react";

const Header = () => {
  const user = getUserFromLocalStorage()
  const [openMenu , setOpenMenu] = useState(false)


  return (
    <header  className="flex justify-between items-center p-2 sm:py-2 sm:px-2 2xl:px-[40rem] xl:px-[20rem] lg:px-60 md:px-36 xs:px-24  sticky top-0 left-0 ">
      <Link to='/'>
        <Logo/>
      </Link>
      <nav className="list-none text-[#fff] ">
        <li>
          {user && <label htmlFor="openMenu" className="cursor-pointer"><User name={user.name} lastname={user.lastname} username={user.username}/></label>}
          <Menu open={openMenu}/>
        </li>
        <li>
          {!user && <Link to='/register'>Registrate</Link>}
        </li>
        <li>
          {!user && <Link to='/login'>Iniciar sesión</Link>}
        </li>
      </nav>

      <input type="checkbox" name="openMenu" id="openMenu" className="hidden" onChange={ (e) => setOpenMenu(e.target.checked) }/>
    </header>
  )
}



export default Header