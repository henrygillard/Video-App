import { useParams } from "react-router-dom"

export default function GroupDetailPage({groups}) {

    let {groupName} = useParams();

    return(
        <div>
            {groupName} detail page
        </div>
    )
}