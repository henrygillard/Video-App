import { Link } from "react-router-dom";

export default function GroupCard({group}) {
    return(
        <>
        <Link to={`/groups/${group.name}`}>
            <div>
                {group.name}
            </div>
        </Link>
        </>
    )
}