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
const years = category.forEach((y,idx) => <li>{y.year}</li>)
    return(
        <div>
            {category.map((c, idx) => <li>
                {c.name} <ul>{years}</ul>
                </li> )}
            
        </div>
    )
}
