import React from 'react';

import './App.sass';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
