import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Collage from './Collage'
import Student from './Student'
import NewUser from './Newuser'
import Wrapper from './Wrapper'
function App() {
  // let userName ="Atharv";
  // let age = 24
  // let email = "atshs@.com"
  // const [count, setCount] = useState(0)
  // let name="Anil Sidhu"

  let userObject ={
    name:"Atharv Kachare",
    age:23,
    email:"ath@App.com"
  }


  let userObject2 ={
    name:"Omkar Jadhav",
    age:23,
    email:"oj@12.com"
  }

  let userObject3 ={
    name:"Shreyas",
    age:23,
    email:"sh@kl.com"
  }

  let collagenames=["IIT", "NIT", "MIT", "ADCET"]
  const [student, setStudent] = useState("Omkar")
  return (
      <div>
        <h1>Props In ReactJS</h1>
        {/* <Collage names={collagenames}/>
        { student && <Student name={student}/>} 
        <button onClick={()=>{setStudent("Jadhav")}}>Update Student</button> */}

        {/* <User name={userName} age={age} email={email}/> */}
         {/* <User user={userObject}/>
        <User user={userObject2}/>
        <User user={userObject3}/> 
        <NewUser name="Atharv Kachare"/>

        <NewUser/>
        <NewUser/> */}
        <Wrapper><h1 style={{color:"blue",paddingLeft:"20px"}}>Hello Everyone</h1></Wrapper>
        <Wrapper><h1>Hello Omkar</h1></Wrapper>
        <Wrapper><h1>Hello Shreyas</h1></Wrapper>
        <Wrapper><h1>Hello Zaid</h1></Wrapper>


      </div>
      

  )
}

export default App
