import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
function App() {

  const userData = [{
    id:"1",
    name:"Atharv Kachare",
    email:"atharvkachare9@gmail.com",
    age:"23"
  },
  {
    id:"2",
    name:"Omkar Jadhav",
    email:"Oj123@gmail.com",
    age:"23"
  },
  {
    id:"3",
    name:"Shreyas Koulge",
    email:"shreyaskoulge123@gmail.com",
    age:"23"
  },
  {
    id:"4",
    name:"Umakant Chougule",
    email:"shreyaskoulge123@gmail.com",
    age:"23"
  }
]
  return (
   <div>
    <h1>Reuse Component in Loop</h1>
    {
      userData.map((user)=>(
        // <div>Hello</div>
        <div key={user.id}>
          <User user={user}/>
        </div>
      ))
    }
   </div>
  )
}

export default App
