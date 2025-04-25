import { useEffect } from "react";
import { useState } from "react";

const Clock=({color, backgroundColor})=>{
    const [time, setTime] = useState(0);
    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    },[])
    
    return(
        <div>
            <h1
            style={{color:color, backgroundColor:"#7520E1", width:'200px', padding:'10px', borderRadius:'10px'}}
            >{time}</h1>
        </div>
    )
}

export default Clock;