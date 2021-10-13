import React from 'react';
import Home from './components/Home';
import Error from './components/Error';
import TopStories from './components/TopStories';
import Signup from './components/Signup';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const THEME = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
});

const App = () => {
  return (
    <main>
      <MuiThemeProvider theme={THEME}>
        <HashRouter basename="/">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/top-stories" component={TopStories} />
            <Route path="/signup" component={Signup} />
            <Route component={Error} />
          </Switch>
        </HashRouter>
      </MuiThemeProvider>
    </main>
  );
};

export default App;
