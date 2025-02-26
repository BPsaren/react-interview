import React from 'react'


///uncontrollered form are used by the useRef hook
import { useRef } from 'react';
const UseRefReact = () => {

    const username=useRef(null);
    const password=useRef(null);

    
    const handleSubmitForm =(event)=>{
    event.preventDefault();
    console.log(username.current.value, password.current.value);
    }

  return (
    <div>
      
      <h1>using UseRef Form registration</h1>
      <div>
        <form onSubmit={handleSubmitForm}>
        
        <input type="text" id="username" ref={username}/>
        <br/>
        <input type="text" id="password" ref={password}/>
        <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UseRefReact;
