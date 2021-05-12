import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';
import Training from './pages/training';
import Search from './pages/search';
import Evaluation from './pages/evaluation';
import Outsourcing from './pages/outsourcing';
import Advisory from './pages/advisory';


function App() {

  return (
    <>
      <Header />
      <Dropdown />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} target="_blank" />
          <Route path='/contact' component={Contact} />
          <Route path='/training' component={Training} />
          <Route path='/search' component={Search} />
          <Route path='/evaluation' component={Evaluation} />
          <Route path='/outsourcing' component={Outsourcing} />
          <Route path='/advisory' component={Advisory} />
          
      </Switch>
      <Footer />
    </>
  );
}

export default App;
