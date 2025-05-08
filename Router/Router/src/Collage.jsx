import { NavLink, Link, Outlet } from "react-router";

function Collage(){
    return(
        <div style={{textAlign:"center"}} className="collage">
            <h1>Collage Component</h1>
            <h3><Link to="/">Go Back To Home</Link></h3>
            <NavLink className="link" to="">Stuent</NavLink>
            <NavLink className="link" to="department">Department</NavLink>
            <NavLink className="link" to="collagedetails">Collagedetails</NavLink>
            <Outlet/>
        </div>
    )
}

export default Collage;