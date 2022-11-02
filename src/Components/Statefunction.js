import React from "react";
import { ReactDOM } from "react";
import {useState} from "react";


let Statefunction=()=>{
  const [sample,setSample]=useState({firstName:'Bayo', LastName:'Ibrahim'});
  let handleChange=(e)=>{
    setSample(...sample,e.target.value)
  };
const [color, setColor] = useState({
brand: 'Ford',
model: 'Mustang',
type: 'car',
year: 2021,
color: 'red'
});
const [count, setCount] = useState(0);


  return(
    <div>
    <label>First Name:</label>
    <input type='text' value={sample.firstName} onChange={(e)=>setSample({...sample,firstName:e.target.value})} />
    <label>Last Name:</label>
    <input type='text' value={sample.LastName} onChange={(e)=>setSample({...sample,LastName:e.target.value})} />
    <p>changes here:{sample.firstName} </p>
    <p>changes here:{sample.LastName} </p>
    <button onclick={()=>setSample(...sample)}>Reset</button>
    <myVehicle />
    <p>I like color {color.brand}</p>
    <button onClick={()=>setColor(updateColor=>{return{...color,brand:'Toyota'}})}>green</button>
    <button onClick={()=>setColor(updateColor=>{return{...color,brand:'Vauxhall'}})}>yellow</button>

    </div>
  )
}

const vehicleOne = {
brand: 'Ford',
model: 'Mustang',
type: 'car',
year: 2021,
color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
const message = <p>'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.'</p>;
return(
  <div>
  hello {message}
  </div>
)
}

export default Statefunction;

// function Statefunction() {
//   const [inputText, setText] = useState('hello');
//
//   function handleChange(e) {
//     setText(e.target.value);
//   }
//
//   return (
//     <div>
//       <input value={inputText} onChange={handleChange} />
//       <p>You typed: {inputText}</p>
//       <button onClick={() => setText('hello')}>
//         Reset
//       </button>
//     </div>
//   );
// }
//
// export default Statefunction
