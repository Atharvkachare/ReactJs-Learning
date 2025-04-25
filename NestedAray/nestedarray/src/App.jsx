import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Collage from './collage'

function App() {
  const collageData=[
   {
    name:"ADCET",
    city:"Ashta",
    website:"ADCET.com",
    student:[
      {
        name:"Atharv Kachare",
        age:"22",
        email:"atharvkachare9@gmail.com"
      },
      {
        name:"Omkar Jadhav",
        age:"22",
        email:"omkar23#@gmail.com"
      },
      {
        name:"Shreyas Koulge",
        age:"22",
        email:"shreyas123$32@gmail.com"
      }
    ]
   },
   {
    name:"RIT",
    city:"Islamput",
    website:"www.RIT.com",
    student:[
      {
        name:"Zaid Momin",
        age:"22",
        email:"zaidmomin123@gmail.com"
      },
      {
        name:"Pratic Teknar",
        age:"22",
        email:"praticteknar12#@gmail.com"
      },
      {
        name:"Saryajeet Thombre",
        age:"22",
        email:"satyajeet123$32@gmail.com"
      }
    ]
   },
   {
    name:"KIT",
    city:"Kolhapur",
    website:"www.KIT.com",
    student:[
      {
        name:"Umakant Shinde",
        age:"22",
        email:"umakantshinde239@gmail.com"
      },
      {
        name:"Sachin Yadav",
        age:"22",
        email:"sachin23#@gmail.com"
      },
      {
        name:"Kiran Prakas",
        age:"22",
        email:"kiranprakash32@gmail.com"
      }
    ]
   }
  ]
  return (
   <div>
    {/* <h1>Nested Loopig with component</h1> */}
    {
      collageData.map((collage, index)=>(
      <div key={index}>
        <Collage collage={collage} />
      </div>
     ))
    }
   </div>
  )
}

export default App
