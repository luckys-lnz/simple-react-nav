import './App.css';

import Nav from './components/Nav';

import Services from './components/Pages/Services';

import Shop from './components/Pages/Shop';

import About from './components/Pages/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (

   <Router>

    <div>

      <Nav />
      
        <Route path='/about' component={About}></Route>

        <Route path='/shop' component={Shop}></Route>

        <Route path='/services' component={Services}></Route>
      
      </div>
     
    </Router>

  );

}

export default App;
