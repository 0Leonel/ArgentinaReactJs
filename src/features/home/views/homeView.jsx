import React from 'react'
import appFirebase from '../../../credenciales';
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

export const HomeView = (props) => {
  return (
    <div>
      <h1>Bienvenido {props.users} <button onClick={() => signOut(auth)} className='bg-blue-500 rounded-lg text-white p-1'>Logout</button></h1>
    </div>
  )
}
