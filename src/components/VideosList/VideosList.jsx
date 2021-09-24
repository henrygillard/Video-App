import ReactPlayer from "react-player"
import { useParams } from "react-router";

export default function VideosList({ year, group, groups, key }) {

    let {groupYear} = useParams();

    const currentYear = group.years.filter(y => y.year === groupYear)
    

    return(
        <div>
            {year.year}
            {/* {year.year} */}
            <ReactPlayer ></ReactPlayer>
            </div>
    )
}