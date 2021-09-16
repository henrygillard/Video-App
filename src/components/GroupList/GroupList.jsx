import { useEffect } from 'react';
import GroupCard from '../GroupCard/GroupCard';


export default function CatList({groups, setGroups}) {

   
        
 
    return(
        <div>
            {groups.map((g) => <GroupCard key={g.name} group={g}/>
                )}

                
        </div>
        )
}
