import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GroupCard from '../GroupCard/GroupCard';
import * as groupsAPI from "../../utilities/groups-api"


export default function CatList({groups, setGroups}) {

   


      const [dciSel, setdciSel] = useState(false)
      const [wgiSel, setwgiSel] = useState(false)
      const [dcaSel, setdcaSel] = useState(false)
   
    const allGroups = groups.map(g => <div>{g.name}</div>)    
    const dci = groups.filter(cat => cat.category === "DCI")
    const wgi = groups.filter(cat => cat.category === "WGI")
    const dca = groups.filter(cat => cat.category === "DCA")

  
    return(
        <div>
            <h3>All Groups</h3>
            {allGroups}
            <Link to="/groups/create"><h3>Create Group</h3></Link>
            <h1 onClick={(evt) => setdciSel(true) } >DCI</h1>
        
            {dci.map((g) => <GroupCard className="dci-groups" key={g.name} group={g} selected={dciSel}/>
                )}
            
            <h1 onClick={(evt) => setwgiSel(true) }>WGI</h1>
            {wgi.map((g) => <GroupCard className="wgi-groups"key={g.name} group={g} selected={wgiSel}/>
                )}
            <h1 onClick={(evt) => setdcaSel(true) }>DCA</h1>
            {dca.map((g) => <GroupCard className="dca-groups" key={g.name} group={g} selected={dcaSel}/>
                )}


                
        </div>
        )

    }