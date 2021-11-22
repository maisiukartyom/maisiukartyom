import React, { useState } from "react";
import "./App.css"

function App() {

  const [numb, setNumb] = useState(0)
  const [parity, setParity] = useState('Введено чётное число')
  const [color, setColor] = useState('green')

  function increment(){
    if (numb % 2 !== 0){
      setParity('Введено чётное число')
      setColor('green')
    }
    else {
      setParity('Введено нечётное число')
      setColor('red')
    }

    setNumb(numb + 1)
      
  }

  function dicrement(){

    if (numb !== 0){
      setNumb(numb - 1)

    if (numb % 2 !== 0){
      setParity('Введено чётное число')
      setColor('green')
    }
    else {
      setParity('Введено нечётное число')
      setColor('red')
    }
    } 
  
  }

  function reset(){
    setNumb(0)
    setParity('Введено чётное число')
    setColor('green')
  }

  return (
    <div className="task" style={{backgroundColor: color}}>
        <h3 className="numb">{numb}</h3>
        <h3 className="parity">{parity}</h3>
        <div className = "buttons">
          <button onClick={dicrement}>
            -
          </button>
          <button  onClick={reset}>
            Reset
          </button>

          <button onClick={increment}>
            +
          </button>
        </div>
    </div>
  );
}

export default App;

