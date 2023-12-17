import { Link } from "react-router-dom"
import Success from "../icons/Success"


const ModalOk = ({ children, location, button, id }) => {
  return (
    <dialog id={id}   className="bg-bunker-successBg p-10 rounded-lg">
      <div className="flex gap-2 justify-center items-center">
        <Success/>
        <h2 className="text-[#15803d] font-semibold">{children}</h2>
      </div>
      <Link to={location} className="text-[#15803d] flex items-center justify-center mt-5 border-2 border-[#00ff5a2b] py-2 px-3 rounded-full">{button}</Link>
    </dialog>
  )
}

export default ModalOk