import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'


function App() {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState(0);

//   useEffect(()=>{
//     // callOnce();
//     counterFunction();
      
//   },[counter, data])


//   function counterFunction(){
//     console.log("Counter Function",counter)
//     console.log("Counter Function",data)

//   }

 
// function callOnce(){
//   console.log("callOnces function calles");

// }  

const [count, setCount] = useState(0)

  return (
   
      <div>
            {/* <h1>UseEffect Hook In ReactJS</h1>
            <button onClick={()=>setCounter(counter+1)}>Counter: {counter}</button>
            <button onClick={()=>setData(data+1)}>Data: {data}</button>
             */}

             <Counter count={count}/>
             <button onClick={()=>setCount(count+1)}>Counter {count}</button>
      </div>
      
  )
}

export default App
