import { useEffect } from 'react';

import * as categoryAPI from '../../utilities/category-api';


export default function CatList({category, setCategory}) {

    useEffect(function() {
        async function getCategory() {
          const categories = await categoryAPI.getAll();
          setCategory(categories);
        }
        getCategory();
      }, []);

 
    return(
        <div>
            {category.map((c, idx) => <li>
                {c.name}
                    <ul>
                        {c.year.map(year =>  <li>{year}</li>)}
                    </ul>
                </li>
                )}

                
        </div>
        )
}
