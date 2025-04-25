import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'

function App() {
const [color, setColor] = useState("White")
const [backgroundcolor, setBackgroundcolor] = useState("Black")
  return (
    <div>
      <h1>Digital Clock</h1>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
        <option value={"white"}>White</option>
      </select>
      <br />
      <h4>Change Background Color</h4>
      <select onChange={(event)=>setBackgroundcolor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"pink"}>Pink</option>
        <option value={"yellow"}>Yellow</option>
        <option value={"black"}>Black</option>
      </select>

      
     <Clock color={color} backgroundcolor={backgroundcolor}/>
    </div>
  )
}

export default App
