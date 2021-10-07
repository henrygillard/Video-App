import { Link } from "react-router-dom";
import "./GroupCard.css"

export default function GroupCard({group, selected, setSelected}) {
    
    return(
        <>
        <Link to={`/${group._id}`}>
        {selected ? 
            <div>
                {group.name}
            </div>
        : <p></p>}
        </Link>
        </>
    )
}