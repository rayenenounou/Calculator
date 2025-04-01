import React, { useState } from 'react';
import { evaluate } from 'mathjs';


function Calculator() {
  const [natija, setNatija]= useState("");
     
  const add=(number)=>{
   setNatija(natija+number);
   console.log(number)
  }
  const clear = () => {
    setNatija("0");
    
  };
  const equal = () => {
    setNatija(evaluate(natija));
  };
  

  return (
    <div className="cal">
      <h1>Nounou Calculator</h1>
      <div className = "allow">
          <input type="text" value={natija} readOnly /> </div>
           <div className="buttons">
        <button onClick={()=>add("7")}>7</button>
        <button onClick={()=>add("8")}>8</button>
        <button onClick={()=>add("9")}>9</button> 
        <button onClick={()=>add("/")}>/</button> <br />
        <button onClick={()=>add("4")}>4</button>
        <button onClick={()=>add("5")}>5</button>
        <button onClick={()=>add("6")}>6</button>
        <button onClick={()=>add("*")}>*</button><br />
        <button onClick={()=>add("1")}>1</button>
        <button onClick={()=>add("2")}>2</button>
        <button onClick={()=>add("3")}>3</button>
        <button onClick={()=>add("-")}>-</button> <br />
        <button onClick={()=>add("0")}>0</button>
        <button onClick={()=>add("+")}>+</button> 
        <button onClick={equal} className ="equal">=</button>
        <button onClick={clear} className ="clear">C</button><br />
      </div>


    </div>
  );
}
export default Calculator;
