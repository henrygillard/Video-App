import './App.css';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import CatList from '../../components/CatList/CatList';


function App() {
  const [category, setCategory] = useState([]);

  


  return (
    <Layout>
      <h1>Hello World!</h1>
      <ul>
        
      <CatList category={category} setCategory={setCategory}/>
        
      </ul>
    </Layout>
  );
}

export default App;
