import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home.js';
import Profile from './Pages/Profile.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Slider from './Components/Slider.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Profile" element={<Profile/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Slide" element={<Slider/>} />
        </Routes>
      </Router>
  );
}

export default App;
