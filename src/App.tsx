import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import './style.sass';
import HomePage from './Pages/HomePage'

interface HomePageProps extends RouteComponentProps {}

const App: React.FC<HomePageProps> = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
