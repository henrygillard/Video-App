import { Link } from "react-router-dom";
import "./GroupCard.css"

export default function GroupCard({group, selected, setSelected}) {
    
    return(
        
        <Link to={`/groups/${group._id}`}>
        {selected ? 
            <div className="group-name">
                {group.name}
            </div>
        : <p></p>}
        </Link>
        
    )
}