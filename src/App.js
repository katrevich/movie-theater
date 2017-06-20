import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

import Main from './pages/Main';
import Schedule from './pages/Schedule';
import Feedback from './pages/Feedback';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import Admin from './pages/Admin';

import Header from './components/Header';

injectGlobal`
  body{
    font-family: Roboto, sans;
    font-size: 14px;
    background: #efefef;
    height: 100%;
  }
  html{
    height: 100%;
  }

  #root{
    height: 100%;
  }

  .layout{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: strech;
  }
`

const PageContent = styled.div`
  height: 100%;
`

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="layout">
          <Header />
          <PageContent>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/schedule/" component={Schedule} />
              <Route path="/feedback/" component={Feedback} />
              <Route path="/coming-soon/" component={ComingSoon} />
              <Route path="/about/" component={About} />
              <Route path="/admin/" component={Admin} />
            </Switch>
          </PageContent>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
