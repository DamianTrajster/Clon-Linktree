import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import {useEffect, useState} from 'react'
import {auth} from '../firebase/firebase'

const LoginView = () => {


  /* tercer paso  */
  const [currentUser, setCurrentUser] = useState(null);
  /* State 
     0 : inicializando
     1:Loading 
     2:Login Completo 
     3: login sin registro 
     4:no hay nadie Logueado
     
     
     */
  const [state, setCurrentState] = useState(0);

  /* Segundo Paso  Obtener info del usuario*/
 useEffect(() => {
   setCurrentState(1)
    onAuthStateChanged(auth, handleUserStateChanged);
  }, []);

  function handleUserStateChanged(user) {
      if(user){
        setCurrentState(3)
        console.log(user.displayName);
      }else {
        setCurrentState(4)
        console.log("no hay nadie" );
      }
  }



  /* Primer paso  */

  async function handleOnClick(){
      
      const googleProvider= new GoogleAuthProvider(); 
      await signInWithGoogle(googleProvider);
      
      async function signInWithGoogle(googleProvider){
        try {
          const res = await signInWithPopup(auth, googleProvider)
          console.log(res);
        } catch (error) {
          console.error(error)
        }
      }

  }


  
  if(state ===3) {
    return <div>Estas Autenticado pero no Registrado</div>
  }

  
  if(state ===4) {
    return (
      <div>
        <button onClick={handleOnClick}>Login Con Google</button>
        
      </div>
    )
  }


  return <div> Loading...</div>


 
}

export default LoginView