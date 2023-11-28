import { Input } from '@nextui-org/react'
import appFirebase from '../../../credenciales';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {  useState } from 'react';
import { useAuth } from '../../auth/hook/use_auth';
const auth = getAuth(appFirebase);

export const LoginViews = () => {
  const [login, setlogin] = useState(false)
  const {usuario} = useAuth();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const hanldeSubmit = async (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if(login){
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        // alert("Asegurese que la contraseña y el email sean validos")
        setError('Email o contraseña incorrectos');
      }
    }else{
      try{
        await signInWithEmailAndPassword(auth, email, password)
      }catch(error){
        // alert("Error al iniciar sesion")
        setError('Error al iniciar sesion'); 
    }
    }}

console.log(error.email)
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]  bg-opacity-10 bg-gradient-to-r from-[#1F1F1F] via-[#743636] to-[#1F1F1F]'>
      <h1 className='text-3xl font-bold text-white p-2'>{login ? "Register" : "Login"}</h1>
      <div className='w-full max-w-xs   p-4 rounded-lg shadow-md shadow-black bg-[#1F1F1F] bg-opacity-70'>
      <form onSubmit={hanldeSubmit} className='grid grid-rows-2 text-white'>
        <div className='py-1'>
        {/* <label className='ml-2 text-xl'>Email</label> */}
       
          <Input
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            name="email"
            id='email' 
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            className="max-w-xs "
            />
          {error && <p className='text-red-500'>{error}</p>}
          </div>
          <div className='py-1'>

        {/* <label className='ml-2 text-xl'>Password</label> */}
        <Input
        value={value.password}
        onChange={(e) => setValue({ ...value, password: e.target.value })}
        name="password"
        id='password'
        type='password'
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        className="max-w-xs "
        />
        {error && <p className='text-red-500'>{error}</p>}
        </div>
    <button   className='bg-[#3075A1] p-2 rounded-lg my-2 font-semibold'>{login ? "Register" : "Login" }</button>
      </form>
      <div className='text-white flex  items-center justify-around'>
        <p>
          {login ? "Ya estas registrado" : "No estas registrado"}
          </p> 
        <button  onClick={() => setlogin(!login)}  className='bg-[#4A1E1E] p-2 rounded-lg my-2'>{login ? "Iniciar sesion" : "Registrate"}</button>
        </div>
        </div>
    </div>
  )
  }
