import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Aboute from "./Aboute";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import Collage from "./Collage";
import Student from "./Student";
import Department from "./Department";
import Collagedetails from "./Collagedetails";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      {/* <Link to="/">Home Page</Link>
    <Link to="/about">About Page</Link>
    <Link to="/login">Login</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboute/>}/>
      </Routes> */}

      {/* <Routes>
         <Route path="/" element={<h1>Home Page</h1>} />
         <Route path="/about" element={<h1>About Page</h1>} />
      </Routes> */}

      {/* <Navbar/> */}

      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList/>}/>
          <Route path="/users/:id" element={<UserDetails/>} />
          <Route path="user">
            
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/about" element={<Aboute />} />
          <Route path="/user/signup" element={<Login />} />
          <Route path="/user/forgot" element={<Login />} />

          </Route>
         
        </Route>

        <Route path="/collage" element={<Collage />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collagedetails" element={<Collagedetails />} />
        </Route>
        <Route path="/*" element={<PageNotFound/>}/>
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default App;
