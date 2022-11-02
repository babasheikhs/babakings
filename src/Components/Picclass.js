import React from "react";
import { ReactDOM } from "react";

class Picclass extends React.Component{
    render(){
        console.log("this.props.caption =" + this.props.src)
        console.log("this.props.caption =" + this.props.location)
        console.log("this.props.caption =" + this.props.caption)
        const image_path = "../image/"+this.props.src
        return<div>
            {/* <img src="../image/kid.jpeg" alt="kid"/> */}
            <img src={image_path} alt={image_path}/>
            <h1>{this.props.caption}</h1>
            <h2>{this.props.location}</h2>
        </div>
    }
}
export default Picclass