import { Link } from "react-router";

export default function UserList() {
  const userData = [
    { id: "1", name: "Atharv" },
    { id: "2", name: "Omkar" },
    { id: "3", name: "Shreyash" },
    { id: "4", name: "Zaid" },
    { id: "5", name: "Chougule" },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User List page</h1>
      {userData.map((item, index) => (
        <div key={index}>
          <h4>
            <Link  to={"/users/" + item.id}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
