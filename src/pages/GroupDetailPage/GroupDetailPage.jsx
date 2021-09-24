import { useParams } from "react-router-dom"
import ReactPlayer from "react-player";
import YearCard from "../../components/YearCard/YearCard";

export default function GroupDetailPage({groups}) {

    let {groupName} = useParams();

    let group = groups.find(g => g.name === groupName)
    
    return(
        <div>
            <h1>{groupName} detail page</h1>
            <h3>Circuit - {group.category}</h3>
            <ReactPlayer url={group.videoUrl}></ReactPlayer>
            <h3>Years</h3>
            {group.years.map(y => <YearCard key={y.year} year={y} group={group}/>)}
        </div>
    )
}