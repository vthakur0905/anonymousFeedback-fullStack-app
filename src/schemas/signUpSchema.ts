
import {z} from 'zod' ;

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 chars")
    .max(20 , "Username should not be longer than 20 chars")
    .regex(/^[a-zA-Z0-9_]+$/ , "Username must not contain special characters")




export const signUpSchema = z.object({
    username : usernameValidation , 
    email : z.string().email({message : 'enter a valid email'}),
    password : z.string().min(3, {message : "password must be 3 characters long"}) 
})