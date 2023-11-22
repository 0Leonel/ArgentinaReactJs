import { Input } from '@nextui-org/react'
import { useState } from 'react';

import appFirebase from '../../../credenciales';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

export const LoginViews = () => {
 const [login, setlogin] = useState(false)
 

  const hanldeSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    if(login){
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert("Asegurese que la contrasena y el email sean validos")
      }
    }else{
      try{
        await signInWithEmailAndPassword(auth, email, password)
      }catch(error){
        alert("Error al iniciar sesion")
      }
    }
  } 

  return (
    <div>
      <h1>Este es el QA aca vamos a probar las cosas antes de subirlo a la produccion</h1>
      <form onSubmit={hanldeSubmit}>
        <label>Email</label>
        <Input
          id='email'
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          className="max-w-xs"
        />
          
        <label>Password</label>
        <Input
        id='password'
        type='password'
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        
        className="max-w-xs"
        />
    <button className='bg-red-500 p-2 rounded-lg my-2'>{login ? "Register" : "Login" }</button>
      </form>
      <div>
        {login ? "Ya estas registrado" : "No estas registrado"}
        <button onClick={() => setlogin(!login)}  className='bg-blue-500 p-2 rounded-lg my-2'>{login ? "Iniciar sesion" : "Registrate"}</button>
        </div>
    </div>
  )
}
