import { Link } from "react-router-dom";

export default function YearCard({ year, group, key }) {
    return(
        <> <Link to={`/${group._id}/${year._id}`}>
        <div>{year.year}</div>
        </Link>
        </>
    )
}