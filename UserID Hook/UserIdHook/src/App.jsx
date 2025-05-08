import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useId } from 'react'

function App() {
const name =useId();
const password =useId();
const terms =useId();
const skills =useId();
  return (
   <div>
    <h1>USeID Hook</h1>
    <UserForm/>
    
   </div>
  )
}


function UserForm() {
  const name =useId();
  const password =useId();
  const terms =useId();
  const skills =useId();
    return (
     <div>
      <form action="">
        <label htmlFor="name">Enter user Name</label>
        <input type="text" id='name' placeholder='Enter name' />
      </form>
      
     </div>
    )
  }

export default App
