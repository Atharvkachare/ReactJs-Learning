import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CheckBoxAndRadioButton from './CheckBoxAndRadioButton'

function App() {
  // const [gender, setGender] = useState("female");
  // const [city, setCity] = useState('')

  // const [gender, setGender] = useState("female")
  // const [city, setCity] = useState('Sangli')

  // const [gender, setGender] = useState("female")
  // const [city, setCity] = useState('Sangli')

  // const [gender, setGender] = useState("female");
  // const [city, setCity] = useState("Sangli");


  return (
    <div>
      {/* <h1>Handle Radio Button</h1>
      <h4>Select Gender</h4>
      <input type="radio"  onChange={(event)=>setGender(event.target.value)} name='gender' id='male' value={"male"} checked={gender=='male'} /><label htmlFor="male">Male</label>
      <br /><br />
      <input type="radio" onChange={(event)=>setGender(event.target.value)}  name='gender' id='female'  value={"female"} checked={gender=='female'} /><label htmlFor="female">Female</label>
      
      <h2>Slected Gender: {gender}</h2>
      <br /><br />
      <h4>Select City</h4>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Sangli"}>
        <option value="Noida">Noida</option>
        <option value="Pune">Pune</option>
        <option value="Navi Mumbai">Navi Mumbai</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Sangli">Sangli</option>
        <option value="Thane">Thane</option>
      </select>
      <h2>Selected city: {city}</h2> */}

      {/* <h1>Select Radio Button</h1>
      <h4>Select Gender</h4>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' id='male' value={"male"} checked={gender=='male'} /><label htmlFor='male'>Male</label>
      <br />
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' id='female' value={"female"} checked={gender=='female'}  /><label htmlFor='female'>Female</label>
      <h2>Selected Gender: {gender}</h2>
      <br /><br />
      <h4>Select City</h4>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Sangli"}>
        <option value="Naoida">Noida</option>
        <option value="Sangli">Sangli</option>
        <option value="Pune">Pune</option>
        <option value="Nashik">Nashik</option>
        <option value="Dhule">Dhule</option>
      </select>
      <h3>Selected City: {city}</h3> */}
      {/* <h1>Handle Radio Button</h1>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' id='male' value={'male'} checked={gender=='male'} /><label htmlFor='male'> Male</label>
      <br />
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name='gender' id='female' value={'female'} checked={gender=='female'} /><label htmlFor='female'>Female</label>
      <h2>Select gender: {gender}</h2>
      <br /><br />
      <select  onChange={(event)=>setCity(event.target.value)} defaultValue={"Sangli"}>
        <option value="Pune">Pune</option>
        <option value="Sangli">Sangli</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Satara">Stara</option>
      </select>
        <h3>Selected City: {city}</h3> */}

      {/* // <h1>Handle Radio button</h1>
      // <input type="radio" name='gender' value='female' onChange={(event)=>setGender(event.target.value)} checked={gender=='female'} />
      //  <label htmlFor="female">Female</label>
      //  <br />
      //  <input type="radio" name='gender' value='male' onChange={(event)=>setGender(event.target.value)} checked={gender=='male'} />
      //  <label htmlFor='male'>Male</label>
      //  <h2>Select Gender: {gender}</h2>

      //  <br /><br />
      //  <select defaultValue={"Sangli"} onChange={(event)=>setCity(event.target.value)}>
      //   <option value="Pune">Pune</option>
      //   <option value="Sangli">Sangli</option>
      //   <option value="Satara">Satara</option>
      //   <option value="Mumbai">Mumbai</option>
      //  </select>
      //  <h3>Selected: {city}</h3> */}

       <CheckBoxAndRadioButton/>
    </div>
  )
}

export default App
