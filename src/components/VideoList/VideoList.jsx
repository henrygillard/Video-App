import ReactPlayer from "react-player";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import * as groupAPI from "../../utilities/groups-api"

export default function VideoList({group, year}) {

    const {id} = useParams();

    const videos = year.videoUrl.map(v => <ReactPlayer url={v}
        url={v}></ReactPlayer >)

    const [groupData, setGroupData] = useState({
       
            year: "",
            videoUrl: [""],
        
    });

    const history = useHistory();

    async function handleSubmit(evt) {
        evt.preventDefault();
        
        await groupAPI.updateGroup(groupData, id);
        history.push(`/${id}`)

    }

    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
      }

    return(
        <>
        {videos}
        </>
    )
    }

