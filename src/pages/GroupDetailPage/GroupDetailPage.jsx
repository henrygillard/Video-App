import { useParams } from "react-router-dom"
import ReactPlayer from "react-player";

export default function GroupDetailPage({groups}) {

    let {groupName} = useParams();

    let group = groups.find(g => g.name === groupName)

    return(
        <div>
            <h1>{groupName} detail page</h1>
            <h3>Circuit - {group.category}</h3>
            <ReactPlayer url={group.videoUrl}></ReactPlayer>
        </div>
    )
}