import {useEffect, useState}  from "react"
import "./UserList.css"
import { useNavigate } from "react-router"

export default function UserList(){
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const url="http://localhost:3000/users";
      useEffect(() => {
       setLoading(true)
    fetch("http://localhost:3000/users")
      .then((res) => res.json()) //  Convert response to JSON
      .then((data) => {
        if (Array.isArray(data)) {
          setUserData(data); //  Safe to use map
        } else {
          console.error("Data is not an array", data);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
      setLoading(false)
  }, []);

    const getUserData = async()=>{
        // const url="http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
        setLoading(false)
    }

    const deleteUser=async(id)=>{
        console.log(id);
        let response = await fetch(url+"/"+id,{
            method:"delete"
        })
        response = await response.json();
        if(response){
            alert("Record deleted");
            getUserData();

            
        }
    }

    const editUser=(id)=>{
        navigate("/edit/"+id)

    }

    return(
        <div>
            <h1>Make routes and pages for add user and user list UI</h1>
            <ul className="user-list user-list-head">
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
                <li>Action</li>
                <li>Edit</li>
            </ul>
            {
                !loading?
                userData.map((user)=>(
                    <ul key={user.name} className="user-list">
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.email}</li>
                        <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
                        <li><button onClick={()=>editUser(user.id)}>Edit</button></li>
                    </ul>
                ))
                :<h1>Data loading...</h1>
            }
        </div>
    )
}