import { z } from "zod";


const userLoginSchema = z.object({
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  })
    .email({ message: 'Tiene que ser email' })
    .min(5, { message: 'Must be 5 or more characters long' })
    .max(40, { message: 'Máximo 40' }),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  })
})


export function validateLogin (object) {
  return userLoginSchema.safeParse(object)
}
