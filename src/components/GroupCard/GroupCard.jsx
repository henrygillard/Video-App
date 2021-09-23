import { Link } from "react-router-dom";

export default function GroupCard({group, selected, setSelected}) {
    
    return(
        <>
        <Link to={`/groups/${group.name}`}>
        {selected ? 
            <div>
                {group.name}
            </div>
        : <p></p>}
        </Link>
        </>
    )
}