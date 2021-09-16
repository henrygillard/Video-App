import './App.css';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import GroupList from '../../components/GroupList/GroupList';
import GroupDetailPage from '../GroupDetailPage/GroupDetailPage';
import * as groupsAPI from '../../utilities/groups-api';



function App() {
  const [groups, setGroups] = useState([]);

  useEffect(function() {
    async function getGroups() {
      const groups = await groupsAPI.getAll();
      setGroups(groups);
    }
    getGroups();
  }, []);



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
