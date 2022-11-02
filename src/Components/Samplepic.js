import React from "react";
import { ReactDOM } from "react";
import './Samplepic.css';


function Samplepic(props){
    return(
        <div>
            <img className="sample" src="../image/Brown1.jpg" alt="dress"/>
            <p>{props.test} to myself</p>

        </div>
    )
}

export default Samplepic
