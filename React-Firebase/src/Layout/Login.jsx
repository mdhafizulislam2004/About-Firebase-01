
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const gooleProvider=new GoogleAuthProvider
    
    return (
        <div>
            <h1>Login Page</h1>
            <button><FaGoogle />Sign In With Google</button>
        </div>
    );
};

export default Login;