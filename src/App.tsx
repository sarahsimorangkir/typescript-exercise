import './App.css';
import Home from './pages/home';
import Trending from './pages/trending';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavbarTop from './components/NavbarTop/NavbarTop';

function App() {
  return (
    <Router>
      <NavbarTop/>
      <Switch>
      <div className="App">
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/trending">
          <Trending/>
        </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
