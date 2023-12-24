import  { forwardRef } from "react";
import { Link } from "react-router-dom";
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";

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
      <nav className="sm:w-60 w-40 p-3 sm:p-4">
        <ul className="flex flex-col ">
          <Link to={`/${user?.username}`}>
            <li onClick={handleClickOpen} className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">Perfil</li>
          </Link>
          <Link to={'/config'}>
            <li onClick={handleClickOpen} className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">Configuración</li>
          </Link>
          <Link to='/upload'>
            <li onClick={handleClickOpen} className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">Subir foto</li>
          </Link>
          <li className="hover:bg-bunker-hover p-1 sm:p-2 rounded-md">
            <button onClick={handleClickLogOut}>Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
});

export default Menu;
