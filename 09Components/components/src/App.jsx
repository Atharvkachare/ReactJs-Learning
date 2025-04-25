import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login,{Profile, Setting, userKey } from './UserComponents'




function App() {
  return (
    <div className='maincomponent' >
    {/* <Firstcomponent/>
    <Fruit/>
    <Cars/>
    <Sum/> */}
    <Login/>
    <Profile/>
    <Setting/>
    <h1>{userKey}</h1>

    </div>
    
  )
}

function Sum(){
  return 10+10
}

function Firstcomponent(){
  return (
  <div className="first">
    <h1>First Component {Sum()}</h1>
  </div>
  )
}
function Fruit(){
  return(
     <div className="fruits"><h1>Apple</h1></div>
  )
  
}

function Cars(){
  return(
    <div className='cars'>
      <h1>Ferrari</h1>
      <h1>Lamborgini</h1>
    </div>
  )
}

export default App
