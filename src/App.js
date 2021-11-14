import React, { useState } from "react";

const task = {
  backgroundColor: "white",
  width: "200px",
  margin: "0 auto",
  boxShadow: "10px 5px 5px green",
  border: "1px solid"
}

function App() {

  let [numb, setnumb] = useState(0)
  let [parity, setp] = useState('Введено чётное число')

    function increment(){
      if (numb % 2 !== 0){
        setp('Введено чётное число')
        document.getElementById("block").style.boxShadow = "10px 5px 5px green" 
      }
      else {
        setp('Введено нечётное число')
        document.getElementById("block").style.boxShadow = "10px 5px 5px red"
      }

      setnumb(numb + 1)
      
    }

    function dicrement(){

      if (numb !== 0){
        setnumb(numb - 1)

        if (numb % 2 !== 0){
          setp('Введено чётное число')
          document.getElementById("block").style.boxShadow = "10px 5px 5px green" 
        }
        else {
          setp('Введено нечётное число')
          document.getElementById("block").style.boxShadow = "10px 5px 5px red"
        }
      }
    }

    function reset(){
      setnumb(0)
      setp('Введено чётное число')
      document.getElementById("block").style.boxShadow = "10px 5px 5px green" 
    }

  return (
    <div id="block" style={task}>
        <h3 style={{textAlign: "center", fontSize: "25px"}}>{numb}</h3>
        <h3 style={{textAlign: "center", fontFamily: "tahoma", fontSize: "15px", margin: "30px auto"}}>{parity}</h3>
        <div style={{width: "100px", margin: "0 auto", display: "flex"}}>
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
