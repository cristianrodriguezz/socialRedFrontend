import axios from "axios"
import { validateLogin } from "../../validators/login"
import { useState } from "react";



const Login = () => {
  const [respuestaServidor, setRespuestaServidor] = useState(null);

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


    const url = 'http://localhost:3000/api/auth/login';

    try {

      const respuesta = await axios.post(url, user)

      localStorage.setItem('respuestaServidor', JSON.stringify(respuesta.data));

      setRespuestaServidor(respuesta.data);

      console.log('Respuesta del servidor:', respuesta.data);

    } catch (error) {

      console.error('Error en la solicitud POST:', error);
    }

  }

  return (
      <main id="login" className="w-full h-screen flex flex-col items-center justify-center px-4 text-[#fff] -z-20 absolute">
        <div className="absolute -z-10 h-screen w-screen left-0 top-0 blur-[1px] brightness-[.333]"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D" alt="background" /></div>
            <div className="max-w-sm w-full">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5 "
                >
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
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            name="password"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg text-bunker-body"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                    <div className="text-center">
                        <a href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</a>
                    </div>
                </form>
            </div>
        </main>
  )
}

export default Login;
