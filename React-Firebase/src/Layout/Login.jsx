import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../Firebase/Firebase.config";


const provider=new GoogleAuthProvider()

const Login = () => {

    const handleGoogleSignin=()=>{
        
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleGoogleSignin}><FaGoogle />Sign In With Google</button>
        </div>
    );
};

export default Login;