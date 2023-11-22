import React, { useState } from 'react'
import appFirebase from '../../../credenciales';
import{getAuth,onAuthStateChanged} from 'firebase/auth';
import { LoginViews } from '../../login/views/loginViews';
import { HomeView } from '../../home/views/homeView';
const auth = getAuth(appFirebase);

const AuthProvider = () => {

    const[usuario,setUsuario] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user){
            setUsuario(user);
        }
        else{
            setUsuario(null);
        }
    });
    console.log(usuario);
  return (
    <div>
        {usuario ? <HomeView users={usuario.email}/> : <LoginViews/>}
    </div>
  )
}

export default AuthProvider;