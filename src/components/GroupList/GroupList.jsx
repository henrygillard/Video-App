import { useEffect } from 'react';
import GroupCard from '../GroupCard/GroupCard';
import * as groupsAPI from '../../utilities/groups-api';


export default function CatList({groups, setGroups}) {

    useEffect(function() {
        async function getGroups() {
          const groups = await groupsAPI.getAll();
          setGroups(groups);
        }
        getGroups();
      }, []);

        
 
    return(
        <div>
            {groups.map((g) => <GroupCard key={g.name} group={g}/>
                )}

                
        </div>
        )
}
