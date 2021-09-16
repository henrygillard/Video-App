import './App.css';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import GroupList from '../../components/GroupList/GroupList';
import GroupDetailPage from '../GroupDetailPage/GroupDetailPage';


function App() {
  const [groups, setGroups] = useState([]);

  


  return (
    <Layout>
      <h1>Hello World!</h1>
      <ul>
      <GroupList groups={groups} setGroups={setGroups}/>
      </ul>
      <Route path="/groups/:groupName">
        <GroupDetailPage groups={groups} />
      </Route>
    </Layout>
  );
}

export default App;
