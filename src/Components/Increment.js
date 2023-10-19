import React,{useState} from "react";



const Increment = () => {

    function update(){
        setCount(count+1);
    }
    const [count,setCount]=useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={update}>Increment</button>
    </div>
  );
};

export default Increment;
