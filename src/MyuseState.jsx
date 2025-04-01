import React, {useState} from 'react';

function MyuseState (){
    const [name, setName]= useState("guest");
     
    const updataName=()=>{
     setName("Nounou");
    }
    }
return(
    <div>
       <p> Name :{name} </p>
       <button onClick={updataName}>Set Name</button>
       <p> Age :{age} </p>
       <button onClick={updataAge}>Set Age</button>
</div>
);
}
export default MyuseState