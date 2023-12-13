import { useState } from "react"
import IniciarSesion from "./IniciarSesion"
import Registrarse from "./Registrarse"



const Modal = ({ children, notSession }) => {

  const [open, setOpen] = useState(notSession ? true : false)

  return (
    <div
      className={`fixed  bottom-0 right-0 w-full p-7 text-bunker-white flex justify-between flex-col sm:flex-row sm:gap-0 gap-5 ${open && 'hidden' }`}
      id="modalNotSession"
    >
      <h2 className="flex items-center justify-center">
        {children}
      </h2>
      <nav className="flex flex-col items-center basis-1/4">
        <IniciarSesion/>
        <Registrarse/>
      </nav>
      <input type="checkbox" id="close" name="close" className="hidden" checked={open} onChange={(e)=> setOpen(e.target.checked)}/>
      <label htmlFor="close" className="absolute top-1 right-1 p-1 cursor-pointer">
        <div className="w-5 text-bunker-logo">
          <svg viewBox="0 0 20 20" width='100%' height='100%'  xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.833 5.342l-1.175-1.175L10 8.825 5.342 4.167 4.167 5.342 8.825 10l-4.658 4.658 1.175 1.175L10 11.175l4.658 4.658 1.175-1.175L11.175 10z"
              fill="currentColor"
            />
          </svg>
        </div>
      </label>
    </div>
  )
}

export default Modal