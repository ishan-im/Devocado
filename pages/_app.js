import "../styles/globals.css";

import NavBar from "../components/NavBar";

import { useEffect,useState } from "react";

import {useAuthState} from 'react-firebase-hooks/auth'

import {UserContext} from './../lib/context'

import { db,storage } from "../lib/firebase";

import { auth } from "../lib/firebase";

function MyApp({ Component, pageProps }) {

const [user] = useAuthState(auth);

const [username,setUsername] = useState(null)


useEffect(()=>{

let unsubscribe;

if(user){

const ref = doc(db,'users',user.uid)

// unsubscribe = ref.onSnapshot((doc)=>{

// setUsername(doc.data()?.username)

// })

}else{
  setUsername(null)
}

return unsubscribe
},[user])


  return (
    <UserContext.Provider value={{user, username}}>
      <NavBar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
