import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const userRef=useRef();
  const passwordRef=useRef();

  const [count, setCount] = useState(0)
  const handleForm=(event)=>{
    event.preventDefault(0);
    const user= document.querySelector("#user").value;
    const password= document.querySelector("#password").value;
    console.log(user, password)

  }

  const handleFormRef=(event)=>{
    event.preventDefault();
    const user=userRef.current.value;
    const password=passwordRef.current.value;
    console.log("handleFormRef", user, password)
    

  }

  return (
    
      <div>
        <h1>Uncontroled Component</h1>
        <form action="" onSubmit={handleForm}>
          <input type="text" id="user" placeholder='Enter user name' />
          <br /><br />
          <input type="text" id="password" placeholder='Enter user password' />
          <br /><br />
          <button>Submit</button>
        </form>

        <hr />
        <h1>Uncontrolled Component With UseRef</h1>
        <form action="" onSubmit={handleFormRef}>
          <input type="text" ref={userRef} id="userRef" placeholder='Enter user name' />
          <br /><br />
          <input type="text" ref={passwordRef} id="passwordRef" placeholder='Enter user password' />
          <br /><br />
          <button>Submit</button>
        </form>


       
      </div>
      
    
  )
}

export default App
