import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Youtub from './youtub'
import Quiz from './Components/Quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz/>
    </>
  )
}

export default App
