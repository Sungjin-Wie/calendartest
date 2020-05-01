import React from 'react';
import {
  Header,
  Home,
  ReactCalendar,
  SimpleReactCalendar,
  DatePicker,
} from './components';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/react-calendar' component={ReactCalendar} />
        <Route
          exact
          path='/simple-react-calendar'
          component={SimpleReactCalendar}
        />
        <Route exact path='/datepicker' component={DatePicker} />
      </Switch>
    </HashRouter>
  );
}

export default App;
