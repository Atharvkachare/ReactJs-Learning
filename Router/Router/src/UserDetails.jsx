import { Link, useParams } from "react-router";

export default function UserDetails() {
    const paramsData = useParams();
    console.log(paramsData)

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User Details page</h1>
      <h2>User ID is: {paramsData.id} </h2>
      <h3><Link to="/users">Back</Link></h3>

     
    </div>
  );
}
