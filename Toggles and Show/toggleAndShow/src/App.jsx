import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const [display, setDisplay] = useState(false)

  return (
   <>
   {/* <h1>Toggles in ReactJS</h1>
   <button onClick={()=>setDisplay(!display)}>Toggle</button>
   {
    // display ? <h1>Anil Sidhu</h1> : null // Conditional Rendring

    display ?  <User/>:null
   } */}

   {/* <h1>Toggle and show</h1>
   <button onClick={()=>setDisplay(!display)}>Toggle</button>
   {
    // display ? <h1>Anit</h1> : null // conditional rendering
    display? <User/>:null
   } */}
   <h1>Toggle Show In ReactJS</h1>
   <button onClick={()=>setDisplay(!display)}>Toggle</button>
   {
    // display ? <h1>Atharv</h1> : null
    display ? <User/> : null
   }
   </>
   
  )
}

export default App
