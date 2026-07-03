import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { useState } from "react";

const provider=new GoogleAuthProvider()
const githubProvider=new GithubAuthProvider()
githubProvider.addScope("user.name")
const Login = () => {

    const [user,setUser]=useState(null)

    const githubHendaler=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const googleHendaler=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
    
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const signout=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            
            <h1>Login Section</h1>
            {
                user?<button onClick={signout}>Sign Out</button>: <>
                    <button onClick={googleHendaler}>Login With Google</button>
                    <button onClick={githubHendaler}>Login With Github</button>
                </>
            }
            {
                user && <div>
                    <h1>Name:{user.displayName}</h1>
                    <h2>Email: {user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;