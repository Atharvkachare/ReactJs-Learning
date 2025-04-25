import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [val, setVal] = useState("")
  // const [data, setData] = useState("")
  const [val, setVal] = useState("");
  const [data, setData] = useState("")
  

  return (
    <div>
      {/* <h1>Get Input Field</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='Enter User Name' />
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear Value</button>
      <br /><br />
      <input type="text" value={data} onChange={(event)=>setData(event.target.value)} placeholder='Enter Email' />
      <h1>{data}</h1>
      <button onClick={()=>setData("")}>Submit Email</button> */}
      <h1>Get Input Field</h1>
      <input type="text"  value={val} placeholder='Enter your name'  onChange={(event)=>setVal(event.target.value)}  />
      <h1>{val}</h1>
      <br /><br />
      <input type="text"   value={data} placeholder='Password' onChange={(event)=>setData(event.target.value)} />
      <h1>{data}</h1>
      <button onClick={()=>setData("") | setVal("")}>Submit email</button>

      {/* <input value={val} onChange={(event)=>setVal(event.target.value)} type="text" placeholder='Enter your name' />
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear Value</button>
      <br /><br />
      <input type="text" placeholder='password' value={data} onChange={(event)=>setData(event.target.value)} />
      <h1>{data}</h1>
      <button onClick={()=>setData("") | setVal("")}>Submit email</button> */}
      
    </div>
  )
}

export default App
