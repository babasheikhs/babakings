import React from "react";
import { ReactDOM } from "react";
import Samplepic from "./Components/Samplepic";
import Photoentry from "./Components/Photoentry";
import Statefunction from "./Components/Statefunction"
import Timer from "./Components/Timer"
import {useState} from "react";
import './App.css'

function App() {
  const [met, setMet]= useState('hello')
  return (
    <div className="App">
      <header ClassName="App-header">
      <Samplepic test={met}/>
      <h1>I am here to rule</h1>
      <p>But sadly not rulling nothing yet</p>
      <Photoentry />
      <Statefunction/>
      <Timer/>
      <div>

       </div>

      </header>
    </div>
  );
}

export default App;
