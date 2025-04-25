function User({displayname, name, getUser}){
    
    return(
        <div>
            <button onClick={()=>displayname(name)}>Display Name</button>
            <button onClick={()=>getUser()}>Get User</button>
        </div>
    )
}

export default User;