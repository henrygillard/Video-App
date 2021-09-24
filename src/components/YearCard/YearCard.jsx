import { Link } from "react-router-dom";

export default function YearCard({ year, group, key }) {
    return(
        <> <Link to={`/${group.name}/${year.year}`}>
        <div>{year.year}</div>
        </Link>
        </>
    )
}