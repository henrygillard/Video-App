import ReactPlayer from "react-player";
import { useParams } from "react-router"


export default function VideoList({group, year}) {

    const {groupYear} = useParams();
    const videos = year.videoUrl.map(v => <ReactPlayer url={v}
        url={v}></ReactPlayer >)

    return(
        <>
        <div>{group.name}-{year.year}</div>
        {videos}
        </>
        )
    }

