import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import User from "./User";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import Registrarse from "./Registrarse";
import IniciarSesion from "./IniciarSesion";
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(getUserFromLocalStorage());

  const handleOpen = (state) => {
    setOpenMenu(state)
  }

  useEffect(() => {
    const handleStorage = () => {
      const storedData = localStorage.getItem('respuestaServidor');
      const storage =  storedData ? JSON.parse(storedData)?.data?.user : null;
      setUser(storage);
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return (
    <header className="flex justify-between items-center p-2 sm:py-2 sm:px-2 2xl:px-[40rem] xl:px-[20rem] lg:px-60 md:px-36 xs:px-24 sticky top-0 left-0">
      <Link to='/'>
        <Logo />
      </Link>
      <nav className="list-none flex text-[#fff]">
        <li>
          {user ? <label htmlFor="openMenu" className="cursor-pointer"><User name={user.name} lastname={user.lastname} username={user.username} /></label> : null}
          <Menu open={openMenu} setOpenMenu={handleOpen} />
        </li>
        <li>
          {!user && <Registrarse />}
        </li>
        <li>
          {!user && <IniciarSesion />}
        </li>
      </nav>
      <input type="checkbox" name="openMenu" id="openMenu" className="hidden" onClick={() => setOpenMenu(!openMenu)} />
    </header>
  );
};

export default Header;

