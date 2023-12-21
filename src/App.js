import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(15)
  let increaseByOne = () =>{
    setCounter(counter+1)
  }
  let decreaseByOne = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={decreaseByOne}>Decrease</button>
      <button onClick={increaseByOne}>Increase</button>
    </>
  );
}

export default App;
