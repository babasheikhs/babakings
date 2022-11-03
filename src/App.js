import Head from "./Components/Head";
import Homepage from "./Components/Homepage";
import Survey from "./Components/Survey";
import Crypto from "./Components/Crypto";
import Games from "./Components/Games";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Head/>
      </header>
      <nav className="NavApp">
      <Link to="/homepage" className="nav-item">Homepage</Link>
      <Link to="/survey" className="nav-item">Survey</Link>
      <Link to="/crypto" className="nav-item">Crypto</Link>
      <Link to="/games" className="nav-item">Games</Link>
      <Link to="/about" className="nav-item">About BabaKings</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <main>
      <Routes>
          <Route path="/homepage" element={<Homepage surveyimg="surveyimg.jpg" surveyalt="survey image"
          gamesimg="gamesimg.jpg" gamesalt="games image" cryptoimg="cryptoimg.jpg"
          cryptoalt="crypto Image"/>}></Route>
          <Route path="/survey" element={<Survey />}></Route>
          <Route path="/crypto" element={<Crypto />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        </main>

    </div>
  );
};

export default App;
