import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home.js';
import Profile from './Pages/Profile.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </Router>
  );
}

export default App;
