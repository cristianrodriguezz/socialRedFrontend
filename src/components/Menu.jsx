import  { forwardRef } from "react";
import { Link } from "react-router-dom";
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";
import Setting from "../icons/Setting";
import Profile from "../icons/Profile";
import SignOut from "../icons/SignOut";
import UploadImage from "../icons/UploadImage";

const Menu = forwardRef(function Menu({open, setOpenMenu}, ref){
  const user = getUserFromLocalStorage();

  const handleClickOpen = () => {
    setOpenMenu(false);
  };

  const handleClickLogOut = () => {
    localStorage.removeItem('respuestaServidor');
    window.dispatchEvent(new Event('storage'));
    handleClickOpen();
  };

  return (
    <aside ref={ref} className={`${open ? 'menuOpen' : 'menu'}  mt-1 sm:mt-0`}>
      <nav className="sm:w-60 w-40 p-3 sm:p-4 ">
        <ul className="flex flex-col text-bunker-white">
          <Link to={`/${user?.username}`}>
            <li onClick={handleClickOpen} className="hover:bg-bunker-hover py-2 sm:p-2 rounded-md flex gap-3 justify-start items-center "><Profile/> Mi perfil</li>
          </Link>
          <Link to={'/config'}>
            <li onClick={handleClickOpen} className="hover:bg-bunker-hover py-2 sm:p-2 rounded-md flex gap-3 justify-start items-center "><Setting/> Ajustes</li>
          </Link>

          <Link to='/upload'>
            <li onClick={handleClickOpen} className="hover:bg-bunker-hover py-2 sm:p-2 rounded-md flex gap-3 justify-start items-center"> <UploadImage/> Subir foto</li>
            <hr />
          </Link>
          <li className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md mt-3">
            <button onClick={handleClickLogOut} className="flex gap-3 justify-start items-center"><SignOut/> Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
});

export default Menu;
