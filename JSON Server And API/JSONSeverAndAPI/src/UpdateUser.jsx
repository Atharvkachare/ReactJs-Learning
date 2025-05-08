import { useEffect , useState} from "react";
import { useNavigate, useParams } from "react-router";

function UpdateUser(){
    const {id} = useParams();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const url="http://localhost:3000/users/"+id;
    const navigate = useNavigate();


    useEffect(()=>{
        getUserData();

    },[])

    const getUserData=async()=>{
        
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name)
        setEmail(response.email)
        setAge(response.age)


    }


    const updateUserData=async()=>{
        console.log(name, age, email);
        let response = await fetch(url,
            {
                method:"Put",
                body:JSON.stringify({name, age, email})
            }
        );
        response =  await response.json();
        console.log(response)
        if(response){
            alert("User data updated ");
            navigate("/")
        }
        

    }
    return(
        <div style={{ textAlign:"center"}}><h1>Edit</h1>
        <input type="text" placeholder="Enter name"  value={name} onChange={(e)=>setName(e.target.value)} />
        <br /><br />
        <input type="text" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br /><br />
        <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br /><br />
        <button onClick={updateUserData}>Edit User</button>
        </div>
    )

}

export default UpdateUser;