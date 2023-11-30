import { useEffect, useState } from 'react'
import { AuthContext } from '../context/auth_context';
import appFirebase from '../../../credenciales';
import{getAuth,onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(appFirebase);


export const AuthProvider = ({ children }) => {
    const[usuario,setUsuario] = useState(null);


useEffect(() => {
     onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(user);
        } else {
            setUsuario(null);
        }
    });
   
}, []);
   

return (
      <AuthContext.Provider
        value={{
          usuario
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthProvider;