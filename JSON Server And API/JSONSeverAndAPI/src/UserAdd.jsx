import { useState } from "react";

function UserAdd(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

  const  createUser=async()=>{
    console.log(name, age, email);
    const url="http://localhost:3000/users";
    let response = await fetch(url,{
        method:'Post',
        body:JSON.stringify({name, email, age})
    });
    response =await response.json();
    if(response){
        alert(" New User Added")
    }

    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Add new User</h1>
            <input type="text" placeholder="Enter text" onChange={(e)=>setName(e.target.value)}  value={name}/>
            <br /><br />
            <input type="text" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)} value={age} />
            <br /><br />
            <input type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            <br /><br />
            <button onClick={createUser} >Add User</button>
        </div>
    )
}

export default UserAdd;