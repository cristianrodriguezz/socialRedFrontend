import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import User from "./User";
import Menu from "./Menu";
import { useEffect, useState, useRef } from "react";
import Registrarse from "./Registrarse";
import IniciarSesion from "./IniciarSesion";
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(getUserFromLocalStorage());
  const menuRef = useRef(null);

  const handleOpen = (state) => {
    setOpenMenu(state);
  };
  const handleDocumentClick = (event) => {
    if (menuRef.current && menuRef.current.className.split(' ')[0] === 'menuOpen' && event.target.name !== 'openMenu') {
      setOpenMenu(false);
    }
  }
  
  
  useEffect(() => {
    const handleStorage = () => {
      const storedData = localStorage.getItem('respuestaServidor');
      const storage =  storedData ? JSON.parse(storedData)?.data?.user : null;
      setUser(storage);
    };

    window.addEventListener('storage', handleStorage);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('storage', handleStorage);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-2 sm:py-2 sm:px-2 2xl:px-[40rem] xl:px-[20rem] lg:px-60 md:px-36 xs:px-24 sticky top-0 left-0">
      <Link to='/'>
        <Logo />
      </Link>
      <nav className="list-none flex text-[#fff]">
        <li>
          {user ? (
            <label htmlFor="openMenu" className="cursor-pointer">
              <User name={user.name} lastname={user.lastname} username={user.username} />
            </label>
          ) : null}
          <Menu ref={menuRef} open={openMenu} setOpenMenu={handleOpen} />
        </li>
        <li>{!user && <Registrarse />}</li>
        <li>{!user && <IniciarSesion />}</li>
      </nav>
      <input  type="checkbox" name="openMenu" id="openMenu" className="hidden" onClick={() => setOpenMenu(!openMenu)} />
    </header>
  );
};

export default Header;
