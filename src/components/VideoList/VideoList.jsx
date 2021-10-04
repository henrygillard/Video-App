import ReactPlayer from "react-player";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import * as groupAPI from "../../utilities/groups-api"

export default function VideoList({group, year}) {

    const {groupName} = useParams();

    const videos = year.videoUrl.map(v => <ReactPlayer url={v}
        url={v}></ReactPlayer >)

    const [groupData, setGroupData] = useState({
        years: [{
            year: "2012",
            videoUrl: ["https://www.youtube.com/watch?v=eA9acpqeaiw"],
        }]
    });

    const history = useHistory();

    async function handleSubmit(evt) {
        evt.preventDefault();
        
        await groupAPI.updateGroup(groupData, groupName);
        history.push(`/groups/${groupName}/`)

    }

    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
      }

    return(
        <>
        <div>{group.name}-{year.year}</div>
        {videos}
        <h1>New Video Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                Year: 
                <input
                name="year"
                value={groupData.years.year}
                required
                onChange={handleChange}/>
            </div>
            
            <div>
                Video URL: 
                <input
                name="videoUrl"
                value={groupData.years.videoUrl}
                required
                onChange={handleChange}
                >
                </input>
            </div>
            <button type="submit">ADD GROUP</button>
        </form>
        </>
        )
    }

