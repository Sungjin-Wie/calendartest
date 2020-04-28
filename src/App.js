import React from 'react';
import { Header, Home } from './components';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
