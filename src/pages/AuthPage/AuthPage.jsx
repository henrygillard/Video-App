import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";



export default function AuthPage({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true);


      
    
    return(
        <div>
            <div>
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </div>
        </div>
    )
}