import { lazy, Suspense, useActionState, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import User from './User'
// const User = lazy(()=>import('./User'));

function App() {
  // const handleLogin = (prevData, formData) => {
  //   let name = formData.get("name");
  //   let password = formData.get("password");
  //   let regex = /^[A-Z0-9]+$/i;

  //   if (!name || name.length > 5) {
  //     return { error: "name cannot be empty or name should not contain more than 5 character" };
  //   } else if (!regex.test(password)) {
  //     return { error: "Password can contain only numbers and alphabet" };
  //   } else {
  //     return { message: "Login Done" };
  //   }
  // };
  // const [data, action, pending] = useActionState(handleLogin);
  // console.log(data)

  // const [load, setLoad] = useState(false);

  return (
    <div>
      {/* <h1>Lazy Loding</h1> */}
      {/* {
        load? <Suspense fallback={<h3>Loading.....</h3>}><User/></Suspense> :null
      }
      
      <button onClick={()=>setLoad(true)}>Load User</button> */}
      {/* <h1>Validation with useActionState in React</h1>
      {
       data?.message && <span>{data?.message}</span>
      }
      {
       data?.error && <span>{data?.error}</span>
      }
      <form action={action}>
        <input type="text" name="name" placeholder="Enter usernam" />
        <br />
        <br />
        <input type="text" name="password" placeholder="Enter password" />
        <br />
        <br />
        <button>Login</button>
      </form> */}




      <h1>USE API</h1>
      <Users/>

    </div>
  );
}


const Users=()=>{
  return(
    <h1>User List</h1>
  )
}

export default App;
