import { useEffect } from 'react';
import GroupCard from '../GroupCard/GroupCard';


export default function CatList({groups, setGroups}) {

   
    const allGroups = groups.map(g => <div>{g.name}</div>)    
    const dci = groups.filter(cat => cat.category === "DCI")
    const wgi = groups.filter(cat => cat.category === "WGI")
    const dca = groups.filter(cat => cat.category === "DCA")
    return(
        <div>
            <h3>All Groups</h3>
            {allGroups}
            <h1>DCI</h1>
            {dci.map((g) => <GroupCard key={g.name} group={g}/>
                )}
            <h1>WGI</h1>
            {wgi.map((g) => <GroupCard key={g.name} group={g}/>
                )}
            <h1>DCA</h1>
            {dca.map((g) => <GroupCard key={g.name} group={g}/>
                )}


                
        </div>
        )
}
