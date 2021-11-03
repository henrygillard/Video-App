import './App.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { useState, useEffect, useParams } from 'react';
import Layout from '../../components/Layout/Layout';
import GroupList from '../../components/GroupList/GroupList';
import GroupDetailPage from '../GroupDetailPage/GroupDetailPage';
import * as groupsAPI from '../../utilities/groups-api';
import * as usersAPI from '../../utilities/users-api';
import NavBar from '../../components/NavBar/NavBar';
import YearDetailPage from '../YearDetailPage/YearDetailPage';
import { getUser } from '../../utilities/users-service';



function App() {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState(false);
  const [user, setUser] = useState(getUser());

  

  useEffect(function() {
    async function getGroups() {
      const groups = await groupsAPI.getAll();
      setGroups(groups);
    }
    getGroups();
  }, []);


 


  return (
    <Layout>
      <NavBar user={user} setUser={setUser}/>
        <Switch>
        <Route exact path="/">
      <GroupList groups={groups} 
      setGroups={setGroups} 
      selected={selected} 
      setSelected={setSelected}
      user={user}/>
      </Route>
      <Route exact path="/:id">
        <GroupDetailPage  />
      </Route>
      <Route exact path="/:id/:yId">
        <YearDetailPage groups={groups} user={user} />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
