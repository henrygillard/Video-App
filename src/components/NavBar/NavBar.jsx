import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import "./NavBar.css"




export default function NavBar({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true);

    function handleLogOut() {
        // Delegate to the userService
        userService.logOut();
        // Update state will cause a re-render
        setUser(null);
    }

      
    
    return(
        <header>
            { user ? 
            <div className="greeting">
                <h3>Hello, {user.name}!</h3>
                <div onClick={handleLogOut}><Link to="/" className="links">Log Out</Link></div>
            </div>
            : 
            <div>
                <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </div>
            }
            <h1>Marching Arts Database</h1>
            <img src="https://i.imgur.com/lm5NWj5.png" />
            <Link className="link" to="/"><h3>Home</h3></Link>
        </header>
    )
}