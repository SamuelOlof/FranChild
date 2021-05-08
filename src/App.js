import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
