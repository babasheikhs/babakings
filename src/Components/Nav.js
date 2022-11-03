import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Survey from "./Components/Survey";
import Crypto from "./Components/Crypto";
import Games from "./Components/Games";
import About from "./Components/About";
import Contact from "./Components/Contact";

function Nav(){
  return(
    <div>
    <Link to="/" className="nav-item">Home</Link>
    <Link to="/" className="nav-item">Survey</Link>
    <Link to="/" className="nav-item">Crypto</Link>
    <Link to="/" className="nav-item">Games</Link>
    <Link to="/" className="nav-item">About BabaKings</Link>
    <Link to="/" className="nav-item">Contact</Link>


    <Routes>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
        <Route path="/crypto" element={<Crypto />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default Nav;
