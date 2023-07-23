import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SavedCards from './SavedCards';

const RoutesComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/saved-cards"
          render={(props) => (
            <SavedCards savedCards={props.location.state.savedCards} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default RoutesComponent;
