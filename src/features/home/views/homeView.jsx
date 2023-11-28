/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import appFirebase from '../../../credenciales';
import { getAuth, signOut } from "firebase/auth";
import AppCard from '../../../core/components/app_card/appCard';
const auth = getAuth(appFirebase);

export const HomeView = (props) => {
 
  return (
    <div>
      <h1>Welcome {props.users}! <button onClick={() => signOut(auth)} className='bg-blue-500 rounded-lg text-white p-1'>Logout</button></h1>
      <div className='flex flex-1 '>
        
      </div>
    
    </div>
  )
}
