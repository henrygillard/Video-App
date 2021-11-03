import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GroupCard from '../GroupCard/GroupCard';
import * as groupsAPI from "../../utilities/groups-api"
import NewGroupForm from '../../pages/NewGroupForm/NewGroupForm';
import './GroupList.css'
import SearchList from"../../components/SearchList/SearchList";

export default function CatList({groups, setGroups}) {

   


      const [dciSel, setdciSel] = useState(false)
      const [wgiSel, setwgiSel] = useState(false)
      const [dcaSel, setdcaSel] = useState(false)
      const [allSel, setAllSel] = useState(false)
      const [mBandSel, setMBandSel] = useState(false)
      const [scIndoorSel, setScIndoorSel] = useState(false)
      const [searchField, setSearchField] = useState("");

      
      function handleChange(evt) {
          evt.preventDefault();
          setSearchField(evt.target.value);
        }
        const filteredGroup = groups.filter(g => {
            return(
                g.name.toLowerCase()
                .includes(searchField.toLowerCase()
            
                )
                )}
                
                );
                
        function checkGroups() {
            if (!filteredGroup) {
                return false
            }
        }
    const allGroups = filteredGroup.map(g => <Link to={`/${g._id}`}><div className="group-name">{g.name}</div></Link>)    
    const dci = groups.filter(cat => cat.category === "DCI")
    const wgi = groups.filter(cat => cat.category === "WGI")
    const dca = groups.filter(cat => cat.category === "DCA")
    const mBand = groups.filter(cat => cat.category === "Marching Band")
    const scIndoor = groups.filter(cat => cat.category === "Scholastic/Indoor")
    
    

  
    return(
        <div className="main-nav">
            <h1 style={{ backgroundColor: allSel ? "black" : ""}}onClick={(evt) => setAllSel(prevAllSel => !prevAllSel)}>All Groups</h1>
            {allSel ? 
            <div className={allSel ? "all-groups-active" : "all-groups"}>
            Search All Groups: <br />
            <input type="search" placeholder="Search by Name" onChange={handleChange}
            />
            {allGroups}
            {checkGroups()}
            
        </div>
            : <div></div>}
            <h1 style={{ backgroundColor: dciSel ? "black" : ""}}onClick={(evt) => setdciSel(prevDciSel => !prevDciSel) } >DCI</h1>
        
            {dci.map((g) => <GroupCard className="dci-groups" key={g.name} group={g} selected={dciSel}/>
                )}
            
            <h1 style={{ backgroundColor: wgiSel ? "black" : ""}}onClick={(evt) => setwgiSel(prevWgiSel => !prevWgiSel) }>WGI</h1>
            {wgi.map((g) => <GroupCard className="wgi-groups"key={g.name} group={g} selected={wgiSel}/>
                )}
            <h1 style={{ backgroundColor: dcaSel ? "black" : ""}}onClick={(evt) => setdcaSel(prevDcaSel => !prevDcaSel) }>DCA</h1>
            {dca.map((g) => <GroupCard className="dca-groups" key={g.name} group={g} selected={dcaSel}/>
                )}
            <h1 style={{ backgroundColor: mBandSel ? "black" : ""}}onClick={(evt) => setMBandSel(prevmBandSel => !prevmBandSel) }>Scholastic/Marching Band</h1>
            {mBand.map((g) => <GroupCard className="marching-band-groups" key={g.name} group={g} selected={mBandSel}/>
                )}
            <h1 style={{ backgroundColor: scIndoorSel ? "black" : ""}}onClick={(evt) => setScIndoorSel(prevscIndoorSel => !prevscIndoorSel) }>Scholastic/Indoor</h1>
            {scIndoor.map((g) => <GroupCard className="scholastic-indoor-groups" key={g.name} group={g} selected={scIndoorSel}/>
                )}
            <NewGroupForm groups={groups} setGroups={setGroups}/>


                
        </div>
        )

    }