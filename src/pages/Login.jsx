import axios from "axios"
import { validateLogin } from "../validators/login"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {

    const URL = import.meta.env.VITE_BACKEND_URL
    const url = `${URL}api/auth/login`

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const password = formData.get('password')
    const email = formData.get('email')

    const user = {
      password,
      email
    }
    
    console.log(validateLogin(user))
    console.log(error)

    setLoading(true)

    try {
      const respuesta = await axios.post(url, user)

      window.localStorage.setItem('respuestaServidor', JSON.stringify(respuesta.data));
      window.dispatchEvent(new Event('storage'))

      if(respuesta.status === 200){
        navigate('/')
      }

      
    } catch (error) {
        
      setError(error.response.data.error)

    }
    finally{
        setLoading(false)
    }

  }

  return (
      <main id="login" className="w-full h-screen flex flex-col items-center justify-center px-4 text-[#fff]  min-h-full">
            <div className="max-w-sm w-full ">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Iniciar sesión en tu cuenta</h3>
                        <p className="">¿Todavía no tenes una cuenta? <Link to='/register' className="font-medium text-indigo-600 hover:text-indigo-500">Registrate</Link></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5 "
                >  
                <h2 className="text-bunker-red h-3 font-semibold">{error}</h2>
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-bunker-body"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            required
                            name="password"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-bunker-body"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-bunker-logo rounded-lg"
                        disabled={loading}
                    >
                        {!loading ? 'Entrar' : 'Cargando...'}
                    </button>
                    <div className="text-center">
                        <a className="hover:text-indigo-600">¿Perdiste la contraseña?</a>
                    </div>
                </form>
            </div>
        </main>
  )
}

export default Login;
