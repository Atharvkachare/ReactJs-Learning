import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
 
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (

      <div>
        <h1>Controled Components</h1>
        {/* <form action="">
          <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='EnterName' />
          <br /><br />
          <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}   placeholder='Email' />
           <br /><br />
           <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}   placeholder='Password' />
           <br /><br />
           <button>Submit</button>

           <button onClick={()=>setEmail("")| setName("")| setPassword("")}>Clear</button>
           <h3>{name}</h3>
           <h3>{email}</h3>
           <h3>{password}</h3>
        </form> */}

        {/* <form action="">
          <input type="text" value={name} onChange={()=>setName(event.target.value)} placeholder='Enter Your Name' />
          <br /><br />
          <input type="text" value={email} onChange={()=>setEmail(event.target.value)} placeholder='Enter Email' />
          <br /><br />
          <input type="text" vlue={event} onChange={()=>setPassword(event.target.value)} placeholder='Password' />
          <br /><br />
          <button>Submit</button>
           <br /><br />
           <button onClick={()=>setName("") | setEmail("") | setPassword("")}>Clear</button>

          <h2>{name}</h2>
          <h2>{email}</h2>
          <h2>{password}</h2>
        </form> */}

        {/* <form action="">
          <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Name' />
          <br /><br />
          <input type="text" value={email} onChange={(event)=> setEmail(event.target.value)} placeholder='Email' />
          <br /><br />
          <input type="text" value={password} onChange={(event)=> setPassword(event.target.value)} placeholder='Password'/>
          <br /><br />
          <button>Submit</button>
          <br /><br />
          <button onClick={()=> setName("") | setEmail("") | setPassword("")}>Clear</button>

          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{password}</h1> */}
        {/* </form> */}

        {/* <form action="">
          <input type="text" value={name} onChange={()=>setName(event.target.value)} placeholder='Name' />
          <br /><br />
          <input type="text" value={email} onChange={()=>setEmail(event.target.value)} placeholder='Email' />
          <br /><br />
          <input type="text" value={password} onChange={()=>setPassword(event.target.value)} placeholder='Password' />
          <br /><br />
          <button>Submit</button>
          <br /><br />
          <button onClick={()=>setName("") | setEmail("") | setPassword("")}>Clear</button>

          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4>{password}</h4>

        </form> */}

        {/* <form >
          <input type="text" placeholder='Enter Name' value={name} onChange={(event)=>setName(event.target.value)} />
          <br /><br />
          <input type="text" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
          <br /><br />
          <input type="text" placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)} />
           <br /><br />
          <button>Submit</button>
          <br /><br />
          <button onClick={()=> setName("") | setEmail("") | setPassword("")}>Clear</button>
          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4>{password}</h4>
        </form> */}

        {/* <input type="text" placeholder='Enter name' value={name} onChange={(event)=>setName(event.target.value)} />
        <br /><br />
        <input type="text" placeholder='Enter Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
        <br /><br />
        <input type="text" placeholder='Enter password' value={password} onChange={(event)=>setPassword(event.target.value)} />
        <br /><br />
        <button>Submit</button>
        <br /><br />
        <button onClick={()=> setName("") | setEmail("") | setPassword("")}>Clear form</button>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{password}</h2> */}

        <form>
          <input type="text" placeholder='Enter name' value={name} onChange={(event)=>setName(event.target.value)}/>
          <br /><br />
          <input type="text" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
          <br /><br />
          <input type="text" placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)} />
          <br /><br />
          <button>Submit</button>
          <br /><br />
          <button onClick={()=>setName('') || setEmail('') || setPassword('')}>Clear Form</button>
        </form>
        <br />
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{password}</h2>
      </div>
     
  )
}

export default App
