import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem } from 'material-ui/List';
import {
  ActionSettingsApplications,
  AvVideoLibrary,
  ActionTheaters,
  ActionEventSeat,
  FileFolder
} from 'material-ui/svg-icons';

import Settings from './Settings';
import Rooms from './Rooms';
import Movies from './Movies';
import Shows from './Shows';
import Schedule from './Schedule';

const AdminLayout = styled.div`
  display: flex;
  align-items: strech;
  flex-direction: row;
  height: 100%;
`

const AdminSidebar = styled.aside`
  width: 220px;
  float: left;
  background: #fff;
  min-width: 220px;
  box-shadow: 0 0 15px 3px rgba(0,0,0, .1);
  position: relative;
`

const AdminContent = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;

  h1{
    margin: 0 0 20px;
  }
`


class Admin extends Component {
  
  render() {
    return (
      <AdminLayout>
        <AdminSidebar>
          <List>
            <ListItem
              primaryText="Settings"
              leftIcon={<ActionSettingsApplications />}
              containerElement={<Link to="/admin/settings" />} />
            <ListItem
              primaryText="Rooms"
              leftIcon={<ActionEventSeat />}
              containerElement={<Link to="/admin/rooms" />} />
            <ListItem
              primaryText="Movies"
              leftIcon={<AvVideoLibrary />}
              containerElement={<Link to="/admin/movies" />} />
            <ListItem
              primaryText="Shows"
              leftIcon={<ActionTheaters />}
              containerElement={<Link to="/admin/shows" />} />
            <ListItem
              primaryText="Schedule"
              leftIcon={<FileFolder />}
              containerElement={<Link to="/admin/schedule" />} />
          </List>
        </AdminSidebar>
        <AdminContent>
          <h1>Admin page</h1>
          <Switch>
            <Route exact path="/admin/" component={() => (<div>placeholder</div>)} />
            <Route path="/admin/settings" component={Settings} />
            <Route path="/admin/rooms" component={Rooms} />
            <Route path="/admin/movies" component={Movies} />
            <Route path="/admin/shows" component={Shows} />
            <Route path="/admin/schedule" component={Schedule} />
          </Switch>
        </AdminContent>
      </AdminLayout>
    )
  }
}

export default Admin;
