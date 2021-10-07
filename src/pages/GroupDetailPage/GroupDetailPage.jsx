import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import YearCard from "../../components/YearCard/YearCard";
import * as groupsAPI from "../../utilities/groups-api"
import UpdateGroupInfo from "../UpdateGroupInfo/UpdateGroupInfo";

export default function GroupDetailPage({groups}) {
    
    let { id } = useParams();

    const [thisGroup, setThisGroup] = useState()

    useEffect(function () {
        async function getGroup() {
            const currentGroup = await groupsAPI.getGroup(id);
            setThisGroup(currentGroup);
        }
        getGroup();
    }, [id]);


    // let group = groups.find(g => g.name === id)
    // const years = thisGroup.years.map(y => <YearCard key={y.year} year={y} group={thisGroup}/>)
    
    return(
        <div>
            <h1> {thisGroup && thisGroup.name} detail page</h1>
            <h3>Circuit - {thisGroup && thisGroup.category}</h3>
            <UpdateGroupInfo group={thisGroup} setGroup={setThisGroup}/>
            <ReactPlayer url={thisGroup && thisGroup.videoUrl}></ReactPlayer>
            <h3>Years</h3>
            { thisGroup && thisGroup.years.map((y)  => <YearCard key={y.year} year={y} group={thisGroup}/>)}
            
        </div>
    )
}