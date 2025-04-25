const User=({user})=>{
    return(
        <div
        style={{border:"2px solid black",
             backgroundColor:"blueviolet", 
              margin:"10px", width:"400px", 
              padding:"10px", borderRadius:"10px"
            }}
        >
            <h3>ID:  <span style={{color:"#fff"}}> {user.id} </span></h3>
            <h3>Name:  <span style={{color:"#fff"}}> {user.name} </span></h3>
            <h3>Age:  <span style={{color:"#fff"}}> {user.age} </span></h3>
            <h3>Email:  <span style={{color:"#fff"}}> {user.email} </span></h3>
        </div>
    )
}

export default User;