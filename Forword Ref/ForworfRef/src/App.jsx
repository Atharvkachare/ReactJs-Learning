import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInput from './UserInput'
import User from './User'
import {useFormStatus} from "react-dom"

function App() {
  // const inputRef=useRef(null)
  // const updateInput=()=>{
  //   inputRef.current.value=1000;
  //   inputRef.current.focus();
  //   inputRef.current.style.color="red";
  // }

  // const displayName=(name)=>{
  //   alert( name)
  // }

  // const getUser=()=>{
  //   alert("Get user function call")
  // }

  // const handleSubmit=async()=>{
  //   await new Promise(res=>setTimeout(res, 5000));
  //   console.log("Submit");

  // }

  // function CustomerForm(){
  //   const {pending} = useFormStatus()
  //   console.log(pending)
  //   return(
  //     <div>
  //        <input type="text" placeholder='Enter Name' />
  //       <br /><br />
  //       <input type="text" placeholder='Enter Password' />
  //       <br /><br />
  //       <button disabled={pending}>Submit</button>
  //     </div>
  //   )
  // }

  const inputRef=useRef(null)
  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color="red"
  }
  const displayName=(name)=>{
    alert(name)
  }

  const getUser=()=>{
    alert("Get user function call");
  }
  const handleSubmit=async()=>{
    await new Promise(res=>setTimeout(res, 5000));
    console.log("Submit")
  }

  function CustomForm(){
    const {pending} = useFormStatus()
    console.log(pending)
    return(
      <div>
        <input type="text" placeholder='Enter Name' />
        <br /><br />
        <input type="text" placeholder='Enter Password' />
        <br /><br />
        <button disabled={pending}>Submit</button>
      </div>
    )
  }


  return (
   
      <div>
        {/* <h1>Forword Ref</h1>
        <UserInput ref={inputRef}/>
        <button onClick={updateInput}>Update Input Field</button> */}

        {/* <h1>Call Parent component Function from child component</h1>
        <User displayname={displayName} name="Atharv" getUser={getUser}/> */}

        {/* <h1>Use Form Status Hook</h1>
        <form  action={handleSubmit}>
          <CustomerForm/>
       
        </form> */}
        <h1>Forword Ref</h1>
        <UserInput ref={inputRef}/>
        <button onClick={updateInput}> Update Input Field</button>

          <h1>Call Parent common function from child component</h1>
          <User displayname={displayName} name="Atharv" getUser={getUser}/>

          <h1>Use From Status Hook</h1>
          <form action={handleSubmit}>
            <CustomForm/>
          </form>
        
      </div>
    
  )
}

export default App
