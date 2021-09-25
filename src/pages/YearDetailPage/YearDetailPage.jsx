import { useParams } from "react-router"
import VideoList from "../../components/VideoList/VideoList";

export default function YearDetailPage({groups}) {

    
    const {groupName} = useParams()
    const {groupYear} = useParams();
    let group = groups.find(g => g.name === groupName)
    let year = group.years.find(y => y.year === groupYear)

    return(
        <>
        <h2>{groupName} - {groupYear}</h2>
        <VideoList group={group} year={year}/>
        </>
    )
}