import { signInWithPopup, signOut } from "firebase/auth";

import { auth, provider } from "../lib/firebase";

import googlePic from "./../public/google.png";

import Image from "next/image";

import classes from './../styles/Button.module.css'

import { useContext } from "react";

import { UserContext } from "../lib/context";

export default function Auth() {
 
 const {user,username} = useContext(UserContext)

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };




  const imgStyle = {
    marginRight: "13px",
  };

  return (
    <button className={`${classes.btn_google} ${classes.button}`} onClick={signInWithGoogle}>
      <Image height={30} width={30} style={imgStyle} src={googlePic} />
      Sign in with Google
    </button>
  );
}

function SignOutButton() {

  const signOutHandler = (e)=>{

    e.preventDefault();
  
    try{
      const res = signOut(auth)
      console.log(res)
    }catch(error){
      console.log(error)
    }
  
  }
  return <button className="btn btn-primary" onClick={signOutHandler}>Sign Out</button>;
}

function UsernameForm() {}
