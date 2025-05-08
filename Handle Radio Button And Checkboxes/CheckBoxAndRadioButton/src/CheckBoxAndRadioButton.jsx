import { useState } from "react";

const CheckBoxAndRadioButton=()=>{
    const [gender, setGender] = useState("female")
    const [city, setCity] = useState('Sangli')
    return(
        <div><h1>Checkbox and Radio button</h1>
        <input type="radio" name="gender" value='female' onChange={(event)=>setGender(event.target.value)} checked={gender=='female'} id="female" />
        <label htmlFor="female">Female</label>
        <br /><br />
        <input type="radio" name="gender" value='male' onChange={(event)=>setGender(event.target.value)} checked={gender=='male'} id="male" />
        <label htmlFor="male">Male</label>
        <h1>Select Gender: {gender}</h1>
        <hr />
        <br /><br />
        <h2>Select City</h2>
        <select defaultValue={"Sangli"} onChange={(event)=>setCity(event.target.value)}>
            <option value="Pune">Pune</option>
            <option value="Sangli">Sangli</option>
            <option value="Satara">Satara</option>
            <option value="Kolhapur">Kolhapur</option>
           
        </select>
        <h1>Selected City: {city}</h1>

        </div>

    )
}

export default CheckBoxAndRadioButton;