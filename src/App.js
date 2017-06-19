import React, { Component } from 'react';
import Seats from './components/Seats/index';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Main from './pages/Main';
import Schedule from './pages/Schedule';
import Feedback from './pages/Feedback';
import ComingSoon from './pages/ComingSoon';

import MainMenu from './components/MainMenu';

injectGlobal`
  body{
    font-family: Roboto, sans;
    font-size: 14px;
    background: #efefef;
  }
`

const PageContent = styled.div`
  padding: 20px;
`

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="layout">
          <AppBar
            title="Movie theater name"
            iconElementLeft={<MainMenu />}
          />
          <PageContent>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/schedule/" component={Schedule} />
              <Route path="/feedback/" component={Feedback} />
              <Route path="/coming-soon/" component={ComingSoon} />
            </Switch>
          </PageContent>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
