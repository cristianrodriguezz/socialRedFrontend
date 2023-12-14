import { z } from "zod";

export const userRegisterSchema = z.object({
  email: z.string({ required_error: 'Email es requerido', })
    .email({ message: 'Tiene que ser email' })
    .min(5, { message: 'El email tiene que tener como mínimo 5 caracteres' })
    .max(40, { message: 'Máximo 40 caracteres' }),
  confirmEmail: z.string({ required_error: 'Confirmar email es requerido' }),
  password: z.string({ required_error: 'La contraseña es requerida' }).min(6, { message: 'Contraseña como mínimo 6 caracteres' }),
  confirmPassword: z.string({ required_error: 'Confirmar contraseña es requerido' }),
  name: z.string({ required_error: 'El nombre es requerido' }).min(3, { message: 'El nombre como mínimo 3 caracteres' }),
  lastname: z.string({ required_error: 'El apellido es requerido' }).min(3, { message: 'El apellido como mínimo 3 caracteres' }),
  username: z.string({ required_error: 'El username es requerido' }).min(3, { message: 'El username como mínimo 3 caracteres' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"], 
}).refine((data) => data.email === data.confirmEmail, {
  message: "Los emails no coinciden",
  path: ["confirmEmail"], 
})
