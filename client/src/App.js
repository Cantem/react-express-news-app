import React from 'react';
import Home from './components/Home';
import Error from './components/Error';
import TopStories from './components/TopStories';
import { Route, Switch, HashRouter } from 'react-router-dom';

const App = () => {

  return (
    <main>
      <HashRouter basename='/'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/top-stories' component={TopStories}/>
        <Route component={Error} />
      </Switch>
      </HashRouter>
    </main>
  );
};

export default App;
