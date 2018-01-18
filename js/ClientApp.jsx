import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const App = () => (
<Router>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
</Router>
  
);

render(<App />, document.getElementById('app'));
