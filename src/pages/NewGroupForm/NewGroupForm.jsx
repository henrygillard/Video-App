import { useState } from "react"
import * as groupAPI from "../../utilities/groups-api"
import "./NewGroupForm.css"

export default function NewGroupForm({groups, setGroups}) {

    const [groupData, setGroupData] = useState({
        name: "",
        category: "DCI",
        videoUrl: "",
    });
    const [selected, setSelected] = useState(false)
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
        setError("");
      }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
           const newGroup = await groupAPI.create(groupData);
           setGroups([...groups, newGroup]);
           setMessage("Group Added Successfully!")
            
        } catch {
            console.log("group already exists")
            setError("Group Already Exists!")
        }
    }
    
    return(
        <>
        <h1 onClick={(evt) => setSelected(prevSelected => !prevSelected)}style={{ backgroundColor: selected ? "black" : ""}}>{selected ? `- Add a Group` : `+ Add a Group`}</h1>
        {selected ? 
        <form className="submit-form" onSubmit={handleSubmit}>
            <div>
            <p style={{color:"red"}}>{error}</p>
            <p style={{color:"green"}}>{message}</p>
                Group Name: 
                <br/>
                <input
                name="name"
                value={groupData.name}
                required
                onChange={handleChange}/>
            </div>
            
            <div>
                Category: 
                <br />
                <select
                name="category"
                value={groupData.category}
                required
                onChange={handleChange}
                >
                <option value="DCI">DCI</option>
                <option value="WGI">WGI</option>
                <option value="DCA">DCA</option>
                <option value="Marching Band">Scholastic/Marching Band</option>
                </select>
            </div>
            <div>
                Video URL: 
                <br />
                <input
                name="videoUrl"
                value={groupData.videoUrl}
                required
                onChange={handleChange}
                >
                </input>
            </div>
            <button type="submit">+ ADD GROUP</button>
        </form>
        : <div></div>}
        </>

    )
}