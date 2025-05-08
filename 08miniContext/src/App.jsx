import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Collage from './Collage'
import ClassComponent from './ClassComponent'
import { SubjectContext } from './ContexData'
// import './App.css'
// import Login from './components/Login'
// import Profile from './components/Profile'
// import UserContext from './context/UserContext'
// import UserContextProvider from './context/UserContexProvider'

function App() {
  const [subject, setSubject] = useState('')

  return (
    <div style={{backgroundColor:"yellow", padding:10}}>
      <SubjectContext.Provider  value={subject}>
        <select  onChange={(event)=>setSubject(event.target.value)} value={subject}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="History">History</option>
        </select>
        <h1>Context API</h1>
        <button onClick={()=>setSubject('')}>Clear Subjects</button>
         <Collage/>
      </SubjectContext.Provider>
     
     
    </div>
  )
}

export default App