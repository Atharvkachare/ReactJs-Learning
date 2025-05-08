import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [data, setData] = useState([
  'Atharv', 'Omkar', 'Shreyas'
])

const handleUSer=(name)=>{
  data[data.length-1] = name;
  console.log(data);
  setData([...data])
}

const handleAge=(age)=>{
 datadetails[datadetails.length-1].age =age;
 console.log(data)
 setDatadetails([...datadetails])
}

const [datadetails, setDatadetails] =useState([
  {
    name:'Prachi', age:'22'
  },
  {name:'Shruti', age:'22'},
  {name:'Sanika', age:'22'} ,
])
  return (
    <div>
      <h1>Update Array</h1>
      <input type="text" placeholder='Enter last user'
        onChange={(e)=>{
          handleUSer(e.target.value)

        }}
      />

      {
        data.map((item, index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
      <hr />
      <input type="text" placeholder='Enter last user age'
      onChange={(e)=>handleAge(e.target.value)} />
      {
        datadetails.map((item, index)=>(
          <h4 key={index}>{item.name}, {item.age}</h4>
        ))
      }
    </div>
  )
}

export default App
