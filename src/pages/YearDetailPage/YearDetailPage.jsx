import { useParams } from "react-router"
import { useState, useEffect } from "react";
import VideoList from "../../components/VideoList/VideoList";
import * as groupsAPI from "../../utilities/groups-api";

export default function YearDetailPage({groups}) {


    const [thisYear, setThisYear] = useState({})
    const [thisGroup, setThisGroup] = useState({})
    const {id} = useParams()
    const {yId} = useParams();

    useEffect(function () {
        async function getGroup() {
            const currentGroup = await groupsAPI.getGroup(id);
            setThisGroup(currentGroup);
        }
        getGroup();
    }, [id]);

    useEffect(function () {
        async function getYear() {
            const currentYear = await groupsAPI.getYear(id, yId);
            setThisYear(currentYear);
        }
        getYear();
    }, [yId]);
    
    // let group = groups.find(g => g.name === groupName)
    // let year = group.years.find(y => y.year === groupYear)

    return(
        <>
        <h2>{thisGroup.name} - {thisYear.year}</h2>
        {/* <VideoList group={thisGroup} year={thisYear}/> */}
        </>
    )
}