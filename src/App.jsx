import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Counter'

function App() {
  useState ();
  let [count,setCount]= useState(0);
  const changeCounter =()=> {
    setCount(count+1);
    console.log(count);
  }
  return (
    <>
    <button onClick={changeCounter}>clicks {count}</button>
    </>
    
  )
}

export default App
