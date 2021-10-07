import { useState } from "react"
import { useHistory, useParams } from "react-router";
import * as groupAPI from "../../utilities/groups-api"

export default function UpdateGroupInfo({group, setGroup}) {
    const {id} = useParams();
    const initData = {
      group
    };

    const [groupData, setGroupData] = useState(
       {initData}
    );

    const [error, setError] = useState('');
    const [selected, setSelected] = useState(false);
    
    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
        setError("No errors")
      }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const update = await groupAPI.updateGroup(groupData, id);
            setGroup(update);

        } catch {
            setError("This Video has already been submitted!");
        }
        

    }

    

    return(
        <>
        <h3 onClick={(evt) => setSelected(prevSelected => !prevSelected)}>Upload a New Video for {group && group.name}</h3>
        {selected ? 
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
            <button type="submit">ADD VIDEO</button>
        </form>
        : <div></div>}
        <p>{error}</p>

        </>
    )
}