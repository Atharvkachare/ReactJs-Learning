import { useState } from "react";

function CheckBoxesSecond(){
    const [skill, setSkill] = useState([])
    const handleSkils=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkill([...skill, event.target.value]) 
        }else{
            setSkill([...skill.filter((item)=>item!=event.target.value)])
        }
    }



    return(
        <div>
            <h3>Select Your Skills</h3>
            <input type="checkbox" id="atharv" value="atharv" onChange={handleSkils}/>
            <label htmlFor="atharv">Atharv</label>
            <br />
            <input type="checkbox" id="omkar" value="omkar" onChange={handleSkils} />
            <label htmlFor="omkar">Omkar</label>
            <br />
            <input type="checkbox" id="shreyas"  value="shreyas" onChange={handleSkils}/>
            <label htmlFor="shreyas">Shreyas</label>
            <br />
            <input type="checkbox" id="zaid" value="zaid" onChange={handleSkils}/>
            <label htmlFor="zaid">Zaid</label>
            <br />
            <input type="checkbox" id="rahul" value="rahul" onChange={handleSkils}/>
            <label htmlFor="rahul">Rahul</label>
            <h1>{skill.toString()}</h1>
        </div>
    )
}

export default CheckBoxesSecond;