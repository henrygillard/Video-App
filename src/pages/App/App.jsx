import './App.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import GroupList from '../../components/GroupList/GroupList';
import GroupDetailPage from '../GroupDetailPage/GroupDetailPage';
import * as groupsAPI from '../../utilities/groups-api';
import NewGroupForm from '../NewGroupForm/NewGroupForm';



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
      <h1>Marching Arts Database</h1>
      <Link to="/group/create"><h3>Create Group</h3></Link>
      <ul>
      <GroupList groups={groups} setGroups={setGroups}/>
      </ul>
      <Switch>
      <Route path="/groups/:groupName">
        <GroupDetailPage groups={groups} />
      </Route>
      <Route exact path="/group/create">
        <NewGroupForm groups={groups} />
      </Route>
      {/* <Redirect to="/" /> */}
      </Switch>
    </Layout>
  );
}

export default App;
