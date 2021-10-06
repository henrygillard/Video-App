import { useState } from "react"
import { useHistory, useParams } from "react-router";
import * as groupAPI from "../../utilities/groups-api"

export default function UpdateGroupInfo({group}) {
    const {id} = useParams();
    const initData = {
      group
    };

    const [groupData, setGroupData] = useState(
       {initData}
    );

    const [error, setError] = useState('');
    
    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
        setError("No errors")
      }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const update = await groupAPI.updateGroup(groupData, id);
            window.location.reload()

        } catch {
            setError("This is an error");
        }
        

    }

    

    return(
        <>
        <h1>New Video Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                Year: 
                <input
                name="year"
                value={groupData.years}
                required
                onChange={handleChange}
                />
                
                
            </div>
            
            <div>
                Video URL: 
                <input
                name="videoUrl"
                value={groupData.videoUrl}
                required
                onChange={handleChange}
                >
                </input>
            </div>
            <button type="submit">ADD GROUP</button>
        </form>
        <p>{error}</p>

        </>
    )
}