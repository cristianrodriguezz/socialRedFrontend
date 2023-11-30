import axios from "axios"
import { validateLogin } from "../validators/login"
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
    <div className="bg-body h-screen text-[#000]">
      <h1>Iniciar sesión</h1>
      <form className="bg bg-white text-[#000] " action="submit" name="login" onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Contraseña
          <input name="password" type="password" />
        </label>
        <button>EN TER</button>
      </form>
    </div>
  )
}

export default Login;
