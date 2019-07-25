import React from 'react';
import Layout from './hoc/layout/Layout';
import { Route, Redirect, Switch } from 'react-router-dom';
import OnNow from './container/OnNowContainer';
import Guide from './components/guide/GuideComponent';
import Discover from './components/discover/DiscoverComponent';
import Saved from './components/saved/SavedComponent';
import Search from './components/Search/SearchComponent';
function App() {
  let routes = (
    <Switch>
      <Route path='/discover' component={Discover}></Route>
      <Route path='/saved' component={Saved}></Route>
      <Route path='/guide' component={Guide}></Route>
      <Route path='/on-now' component={OnNow} exact></Route>
      <Route path='/search' component={Search}></Route>

      <Redirect to='/on-now' />
    </Switch>
  )
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
