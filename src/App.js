import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* pages */
import About        from './pages/About';
import Contact      from './pages/Contact';
import Services     from './pages/Services';
import Home         from './pages/Home';
import NotFound     from './pages/NotFound';
import SiteHeader   from './pages/SiteHeader';
import SiteFooter   from './pages/SiteFooter';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route component={Home}     path="/" exact />
          <Route component={Services} path="/services" />
          <Route component={About}    path="/about" />
          <Route component={Contact}  path="/contact" />
          <Route component={NotFound} />
        </Switch>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
