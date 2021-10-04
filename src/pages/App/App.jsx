import './App.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { useState, useEffect, useParams } from 'react';
import Layout from '../../components/Layout/Layout';
import GroupList from '../../components/GroupList/GroupList';
import GroupDetailPage from '../GroupDetailPage/GroupDetailPage';
import * as groupsAPI from '../../utilities/groups-api';
import NewGroupForm from '../NewGroupForm/NewGroupForm';
import NavBar from '../../components/NavBar/NavBar';
import YearDetailPage from '../YearDetailPage/YearDetailPage';
import UpdateGroupInfo from '../UpdateGroupInfo/UpdateGroupInfo';



function App() {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState(false)
  
 


  useEffect(function() {
    async function getGroups() {
      const groups = await groupsAPI.getAll();
      setGroups(groups);
    }
    getGroups();
  }, []);


 


  return (
    <Layout>
      <NavBar/>
        <Switch>
        <Route exact path="/">
      <GroupList groups={groups} 
      setGroups={setGroups} 
      selected={selected} 
      setSelected={setSelected}/>
      </Route>
      <Route exact path="/:id">
        <GroupDetailPage  />
      </Route>
      <Route exact path="/:id/:yId">
        <YearDetailPage groups={groups} />
      </Route>
      <Route exact path="/create">
        <NewGroupForm groups={groups} />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
