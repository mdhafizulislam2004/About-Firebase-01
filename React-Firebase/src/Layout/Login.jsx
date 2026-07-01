import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { useState } from "react";

const provider=new GoogleAuthProvider()

const Login = () => {

    const [user,setUser]=useState(null)

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
            console.log("Sign Out Done");
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <h1>Login Section</h1>
            {/* <button onClick={googleHendaler}>Login With Google</button>
            <button onClick={signout}>Sign Out</button> */}

            {
                user?<button onClick={signout}>Sign Out</button>:<button onClick={googleHendaler}>Login With Google</button>
            }
            
        {user && <div>
            <h3>Name: {user.displayName}</h3>
            <h4>Email: {user.email}</h4>
            <img src={user.photoURL} alt="" />
        </div>}
        </div>
    );
};

export default Login;