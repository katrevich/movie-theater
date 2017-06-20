import React from 'react';
import AppBar from 'material-ui/AppBar';
import MainMenu from '../MainMenu';

const Header = props => (
  <AppBar
    style={{minHeight: 65}}
    title="Movie theater name"
    iconElementLeft={<MainMenu />}
  />
)

export default Header;
