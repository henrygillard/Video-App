import { useState } from "react"
import { useHistory, useParams } from "react-router";
import * as groupAPI from "../../utilities/groups-api"
import "./UpdateGroupInfo.css"

export default function UpdateGroupInfo({group, setGroup, user}) {
    const {id} = useParams();
    const initData = {
      group
    };

    const [groupData, setGroupData] = useState(
       {initData}
    );

    const years = ["1972", '1973', '1974', '1975', '1976'
    , '1977', '1978', '1979', '1980', '1981', '1982'
    , '1983', '1984', '1985', '1986', '1987', '1988'
    , '1989', '1990', '1991', '1992', '1993', '1994'
    , '1995', '1996', '1997', '1998', '1999', '2000'
    , '2001', '2002', '2003', '2004', '2005', '2006'
    , '2007', '2008', '2009', '2010', '2011', '2012'
    , '2013', '2014', '2015', '2016', '2017', '2018'
    , '2019', '2020', '2021', '2022']
    const sortYears = years.reverse()
    const options = sortYears.map(y => <option value={y}>{y}</option>)


    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [selected, setSelected] = useState(false);
    
    function handleChange(evt) {
        const newGroupData= { ...groupData, [evt.target.name]: evt.target.value };
        setGroupData(newGroupData);
        setError("")
      }

    async function handleSubmit(evt) {
        evt.preventDefault();
        if (user) {
            try {
                const update = await groupAPI.updateGroup(groupData, id);
                setGroup(update);
                setMessage("Video uploaded successfully!")
            } catch {
                setError("This Video has already been submitted!");
            }
        } else {
            setError("Please log in to upload videos")
        }
    }
    
    return(
        <>
        <h3 style={{ backgroundColor: selected ? "#ab0101" : ""}}className="upload-button" onClick={(evt) => setSelected(prevSelected => !prevSelected)}>Upload a New Video for {group && group.name}</h3>
        <p className="error-message">{error}</p>
        <p className="success-message">{message}</p>
        {selected ? 
        <form className="submit-form" onSubmit={handleSubmit}>
            <div>
                <label>Group: <br />{group.name}</label>
            </div>
            <div>
                <label>Year: </label>
                <select 
                value={groupData.years}
                onChange={handleChange}
                name="year">
                    {options}
                </select>
            </div>
            {/* <div>
                Year: 
                <input
                name="year"
                value={groupData.years}
                required
                onChange={handleChange}
                />
            </div> */}
            <div>
                <label>Video URL: </label> 
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
        : <div></div>
        }

        </>
    )
}