import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkboxes from './CheckBoxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
         <Checkboxes/>
      </div>
    
  )
}

export default App
