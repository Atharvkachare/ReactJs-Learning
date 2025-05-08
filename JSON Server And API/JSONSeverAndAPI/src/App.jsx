import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import {NavLink, Route,Routes} from "react-router"
import UpdateUser from "./UpdateUser";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   getUserData()
  // },[])
  // const getUserData= async()=>{
  //   const url ="http://localhost:3000/users";
  //   let response = await fetch(url);
  //   console.log(response)
  //   setUserData(response)

  // }
  // useEffect(() => {
  //   setLoading(true)
  //   fetch("http://localhost:3000/users")
  //     .then((res) => res.json()) //  Convert response to JSON
  //     .then((data) => {
  //       if (Array.isArray(data)) {
  //         setUserData(data); //  Safe to use map
  //       } else {
  //         console.error("Data is not an array", data);
  //       }
  //     })
  //     .catch((err) => console.error("Fetch error:", err));
  //     setLoading(false)
  // }, []);

  return ( 
    <div>
     <ul className="nav-list">
      <li><NavLink to="/">List</NavLink></li>
      <li><NavLink to="/add">Add Users</NavLink></li>
     </ul>



      
      {/* <h1>Make routes and pages for add user and user list UI</h1> */}
      {/* <UserList/> */}
      <Routes>
        <Route  path="/"  element={<UserList/>} />
        <Route  path="/add"  element={<UserAdd/>} />
        <Route  path="/edit/:id"  element={<UpdateUser/>} />

        
      </Routes>
      {/* <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
      </ul>
      {!loading ? (
        userData.map((user) => (
          <ul key={user.name} className="user-list">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
          </ul>
        ))
      ) : (
        <h1>Data loading...</h1>
      )} */}
    </div>
  );
}

export default App;
