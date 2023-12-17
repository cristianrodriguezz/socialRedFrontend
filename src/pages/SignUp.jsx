import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userRegisterSchema } from '../validators/userRegisterSchema';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import  ModalOk from '../components/ModalOk';


const SignUp = () => {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const url = `${URL}api/auth/register`;
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(userRegisterSchema) });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const onSubmit = async (data) => {
    const dialog = document.getElementById('isRegisterOk');
    const user = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      username: data.username
    }

    setLoading(true)

    try {
      const respuesta = await axios.post(url, user);

      if (respuesta.status === 200) {
        dialog.showModal()
      }
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen text-bunker-white">
    <ModalOk button={'Ir a iniciar sesión'} location={'/login'} id='isRegisterOk'>
      ¡Te registraste con éxito!
    </ModalOk>
      <div className="w-full max-w-md bg-bunker-bodySecondary  rounded-lg shadow-md p-6">
        <h2 className="text-5xl text-center font-bold mb-4 ">Registrarse</h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <p className="h-6 mb-2 text-center text-bunker-red ">{error}</p>
          <input placeholder="Nombre" {...register('name')} className="bg-gray-100 text-bunker-body border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p className="h-6 flex items-center justify-start text-bunker-red">{errors.name?.message && errors.name?.message}</p>
          <input placeholder="Apellido" {...register('lastname')} className="bg-gray-100 text-bunker-body  border-0 rounded-md p-2  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p className="h-6 flex items-center justify-start text-bunker-red">{errors.lastname?.message && errors.lastname?.message}</p>
          <input placeholder="Username" {...register('username')} className="bg-gray-100 text-bunker-body  border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
          <p className="h-6 flex items-center justify-start text-bunker-red">{errors.username?.message && errors.username?.message}</p>
          <input placeholder="Email" {...register('email')} className="bg-gray-100 text-bunker-body  border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
          <p className="h-6 flex items-center justify-start text-bunker-red">{errors.email?.message && errors.email?.message}</p>
          <input placeholder="Confirmar Email" {...register('confirmEmail')} className="bg-gray-100 text-bunker-body  border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
          <p className="h-6 flex items-center justify-start text-bunker-red">{errors.confirmEmail?.message && errors.confirmEmail?.message}</p>
          <input placeholder="Contraseña" {...register('password')} className="bg-gray-100 text-bunker-body  border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password"/>
          <p className="h-6 flex items-center justify-start text-bunker-red">{errors.password?.message && errors.password?.message}</p>
          <input placeholder="Confirmar contraseña" {...register('confirmPassword')} className="bg-gray-100 text-bunker-body  border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password"/>
          <p className="h-6 flex items-center justify-start text-bunker-red">{errors.confirmPassword?.message && errors.confirmPassword?.message}</p>
          <p className="text-bunker-gray  mt-4"> ¿Ya tenes una cuenta? <Link className="text-sm text-blue-500 -200 hover:underline mt-4" to='/login'>Iniciá sesión</Link></p>
          <input type='submit' disabled={loading} value={!loading ? 'Registrarse' : 'Cargando...'} className="bg-bunker-logo px-3 py-2 rounded-lg mt-3 cursor-pointer" />
        </form>
      </div>
      
    </div>

    </>
  );
};

export default SignUp;
