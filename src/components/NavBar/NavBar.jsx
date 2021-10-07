import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    
    return(
        <header>
            <h1>Marching Arts Database</h1>
            <Link to="/"><h3>Home</h3></Link>
        </header>
    )
}