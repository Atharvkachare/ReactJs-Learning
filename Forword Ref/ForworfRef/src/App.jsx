import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInput from './UserInput'
import User from './User'

function App() {
  // const inputRef=useRef(null)
  // const updateInput=()=>{
  //   inputRef.current.value=1000;
  //   inputRef.current.focus();
  //   inputRef.current.style.color="red";
  // }

  const displayName=(name)=>{
    alert( name)
  }

  const getUser=()=>{
    alert("Get user function call")
  }
  return (
   
      <div>
        {/* <h1>Forword Ref</h1>
        <UserInput ref={inputRef}/>
        <button onClick={updateInput}>Update Input Field</button> */}

        {/* <h1>Call Parent component Function from child component</h1>
        <User displayname={displayName} name="Atharv" getUser={getUser}/> */}

        <h1>Use Form Status Hook</h1>
      </div>
    
  )
}

export default App
