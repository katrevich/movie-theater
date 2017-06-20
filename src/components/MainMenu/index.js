import React from 'react';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const MainMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><NavigationMenu color="#fff" /></IconButton>
    }
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem
      containerElement={<Link to="/" />}
      primaryText="Main" />
    <MenuItem
      containerElement={<Link to="/schedule" />}
      primaryText="Schedule" />
    <MenuItem
      containerElement={<Link to="/feedback" />}
      primaryText="Feedback" />
    <MenuItem
      containerElement={<Link to="/coming-soon" />}
      primaryText="Coming soon" />
    <MenuItem
      containerElement={<Link to="/about" />}
      primaryText="About" />
    <MenuItem
      containerElement={<Link to="/admin" />}
      primaryText="Admin" />
  </IconMenu>
);

export default MainMenu;
