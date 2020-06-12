import React from 'react';

import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { Provider, useSelector } from 'react-redux';

import CrashPredictionsPage from './pages/CrashPredictions';
import ZoneCountsPage from './pages/ZoneCounts';

import './App.css';

import configureStore from "./store";
const store = configureStore({});

function PrivateRoute({ component: Component, ...rest }) {
  let auth = useSelector(state => state.auth);
  let authed = auth.authenticated;

  return(
      <Route
          {...rest}
          render={props => (
            authed
                  ? <Component {...props} />
                  : <Redirect to="/" />
          )}
      />
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={CrashPredictionsPage}/>
          <Route exact path="/crash_predictions" component={CrashPredictionsPage}/>
          <Route exact path="/zone_counts" component={ZoneCountsPage}/>
          <Route exact path="/predictions_vs_actual" component={ZoneCountsPage}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
