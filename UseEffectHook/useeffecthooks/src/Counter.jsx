import { useEffect } from "react";

const Counter=({count})=>{

  const   handleCounter=()=>{
    console.log("Handle Counter")
  }

  useEffect(()=>{
    handleCounter();
  },[])
 
    return(
        <div>
            <h1>Counter Component: {count}</h1>
        </div>
    )
}

export default Counter;