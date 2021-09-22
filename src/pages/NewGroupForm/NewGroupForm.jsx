import { useState } from "react"
import * as groupAPI from "../../utilities/groups-api"
import * as categoryAPI from "../../utilities/category-api"

export default function NewGroupForm({groups}) {

    const [groupData, setGroupData] = useState({
        name: "",
        category: "",
    });
    

    async function handleSubmit(evt) {
        evt.preventDefault();
        await groupAPI.create(groupData);

    }

    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
      }
    

    return(
        <>
        <h1>New Group Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                Group Name: 
                <input
                name="name"
                value={groupData.name}
                required
                onChange={handleChange}/>
            </div>
            <div>
                Category: 
                <input
                name="category"
                value={groupData.category.name}
                required
                onChange={handleChange}/>
            </div>
            <button type="submit">ADD GROUP</button>
        </form>

        </>
    )
}