import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GroupCard from '../GroupCard/GroupCard';
import * as groupsAPI from "../../utilities/groups-api"
import NewGroupForm from '../../pages/NewGroupForm/NewGroupForm';
import './GroupList.css'

export default function CatList({groups, setGroups}) {

   


      const [dciSel, setdciSel] = useState(false)
      const [wgiSel, setwgiSel] = useState(false)
      const [dcaSel, setdcaSel] = useState(false)
      const [allSel, setAllSel] = useState(false)
      const [mBandSel, setMBandSel] = useState(false)
   
    const allGroups = groups.map(g => <Link to={`/${g._id}`}><div className="group-name">{g.name}</div></Link>)    
    const dci = groups.filter(cat => cat.category === "DCI")
    const wgi = groups.filter(cat => cat.category === "WGI")
    const dca = groups.filter(cat => cat.category === "DCA")
    const mBand = groups.filter(cat => cat.category === "Marching Band")

  
    return(
        <div className="main-nav">
            <h1 onClick={(evt) => setAllSel(prevAllSel => !prevAllSel)}>All Groups</h1>
            {allSel ? 
           allGroups
            : <div></div>}
            <h1 onClick={(evt) => setdciSel(prevDciSel => !prevDciSel) } >DCI</h1>
        
            {dci.map((g) => <GroupCard className="dci-groups" key={g.name} group={g} selected={dciSel}/>
                )}
            
            <h1 onClick={(evt) => setwgiSel(prevWgiSel => !prevWgiSel) }>WGI</h1>
            {wgi.map((g) => <GroupCard className="wgi-groups"key={g.name} group={g} selected={wgiSel}/>
                )}
            <h1 onClick={(evt) => setdcaSel(prevDcaSel => !prevDcaSel) }>DCA</h1>
            {dca.map((g) => <GroupCard className="dca-groups" key={g.name} group={g} selected={dcaSel}/>
                )}
            <h1 onClick={(evt) => setMBandSel(prevmBandSel => !prevmBandSel) }>Scholastic/Marching Band</h1>
            {mBand.map((g) => <GroupCard className="marching-band-groups" key={g.name} group={g} selected={mBandSel}/>
                )}
            <NewGroupForm groups={groups} setGroups={setGroups}/>


                
        </div>
        )

    }