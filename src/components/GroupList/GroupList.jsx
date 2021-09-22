import { useEffect } from 'react';
import GroupCard from '../GroupCard/GroupCard';


export default function CatList({groups, setGroups}) {

   
        
    const dci = groups.filter(cat => cat.category.name === "DCI")
    const wgi = groups.filter(cat => cat.category.name === "WGI")
    const dca = groups.filter(cat => cat.category.name === "DCA")
    return(
        <div>
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
