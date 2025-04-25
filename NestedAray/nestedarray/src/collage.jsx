import Student from "./Student";

const Collage=({collage})=>{
    console.log(collage)
    return(
        <div style={{
            border:"2px solid",
            padding:"20px",
            margin:"20px",
            borderRadius:"10px",
            backgroundColor:"#baa2cd"
        }}>
        <h1>Name: {collage.name}</h1>
        <ul>
         <li>
           <h3>City: {collage.city}</h3>
         </li>
         <li>
           <h3>Website: {collage.website}</h3>
         </li>
         <li>
            <Student student={collage.student}/>
         </li>
        </ul>
       </div>
    )
}

export default Collage;