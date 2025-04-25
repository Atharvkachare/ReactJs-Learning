import { useState } from "react"

function Checkboxes(){
    // const [skills, setSkills] = useState([])
    // const handleSkills=(event)=>{
    //     console.log(event.target.value, event.target.checked);
    //     if(event.target.checked)
    //     {
    //         setSkills([...skills, event.target.value]) // Spread Operator
    //     }else{
    //         setSkills([...skills.filter((item)=>item!=event.target.value)])
    //     }
    //   }

    const [skills, setSkills] = useState([])
    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills, event.target.value]) // Spread Operator
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }

  

    return(
        <div>
            {/* <h1>Select Your Skills</h1>
            <input onChange={handleSkills} type="checkbox"  id="php" value="php"/>
            <label htmlFor="php">PHP</label>
            <br /><br />
            <input onChange={handleSkills}  type="checkbox"  id="java" value="java"/>
            <label htmlFor="java">Java</label>
            <br /><br />
            <input onChange={handleSkills}  type="checkbox"  id="C++" value="C++"/>
            <label htmlFor="C++">C++</label>
            <br /><br />
            <input onChange={handleSkills}  type="checkbox"  id="python" value="python"/>
            <label htmlFor="python">Python</label>
            <br /><br />
            <input onChange={handleSkills}  type="checkbox"  id="sql" value="sql"/>
            <label htmlFor="sql">SQL</label>
            <br /><br />
            <h1>{skills.toString()}</h1> */}
            <h1>Select Your Skils</h1>
            <input type="checkbox" id="php" value="php" onChange={handleSkills} />
            <label htmlFor="php">PHP</label>
            <br /><br />
            <input type="checkbox" id="java" value="java" onChange={handleSkills} />
            <label htmlFor="java">Java</label>
            <br /><br />
            <input type="checkbox" id="c++" value="c++" onChange={handleSkills} />
            <label htmlFor="c++">C++</label>
            <br /><br />
            <input type="checkbox" id="Python" value='python' onChange={handleSkills} />
            <label htmlFor="Python">Python</label>
            <br /><br />
            <h1>{skills.toString()}</h1>
        </div>
      
    )
}

export default Checkboxes