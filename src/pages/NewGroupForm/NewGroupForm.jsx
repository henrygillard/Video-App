import { useState } from "react"
import { useHistory } from "react-router";
import * as groupAPI from "../../utilities/groups-api"
import * as categoryAPI from "../../utilities/category-api"

export default function NewGroupForm({groups}) {

    const [groupData, setGroupData] = useState({
        name: "",
        category: "",
    });
    
    const history = useHistory();

    async function handleSubmit(evt) {
        evt.preventDefault();
        await groupAPI.create(groupData);
        history.push('/')

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
                <select
                name="category"
                value={groupData.category.name}
                required
                onChange={handleChange}
                >
                <option value="DCI">DCI</option>
                <option value="WGI">WGI</option>
                <option value="DCA">DCA</option>
                </select>
            </div>
            <button type="submit">ADD GROUP</button>
        </form>

        </>
    )
}