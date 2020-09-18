import React from 'react';

import './App.sass';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Uses from './pages/Uses';
import Learning from './pages/Learning';
import Productivity from './pages/Productivity';
import Art from './pages/Art';
import Error from './pages/Error';

import { Route, Switch, useLocation, withRouter } from 'react-router-dom';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    // console.log('Location changed');
    // console.log(location);
  }, [location]);

  return (
    <div className="App">
      <Navbar location={location} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/myUses" component={Uses} />
        <Route exact path="/myUses/learning" component={Learning} />
        <Route exact path="/myUses/productivity" component={Productivity} />
        <Route exact path="/myUses/art" component={Art} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
