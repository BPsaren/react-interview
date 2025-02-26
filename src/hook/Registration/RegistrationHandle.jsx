import React, { useState } from 'react'







const Registrationhandle = () => {


  const[user,setUser]=useState({
    firstName:"",
    lastName:"",
    number:"",
    email:"",
    password:"",
  });

  const handleSubmit =(event)=>{
   event.preventDefault();
    console.log(user);
    
  }


  const handleInputChange =(e)=>{
    const {name,value}=e.target;
    setUser((prev)=>({...prev,[name]:value}));
  }


  return (
    <div>
      <h1>Registration Form </h1>
      <form onSubmit={handleSubmit}>
        <h2>Sing Up</h2>
        <div>
        <label htmlFor="firstName"> 
        <b>First Name</b>
        </label>

        <input type="text"
        name="firstName" 
        placeholder="enter first name"
         required
         autoComplete='off'
         value={user.firstName}
         onChange={handleInputChange}
          >
        </input>
        </div>


        <div>
        <label htmlFor="lastName"> 
        <b>Last Name</b>
        </label>

        <input type="text"
        name="lastName" 
        placeholder="enter last name"
         required
         autoComplete='off'
          value={user.lastName}
         onChange={handleInputChange}
          >
        </input>
        </div>


        <div>
        <label htmlFor="mobile "> 
        <b>Mobile Number</b>
        </label>

        <input type="number"
        name="number" 
        placeholder="enter mobile number"
         required
         autoComplete='off'
          value={user.mobile}
         onChange={handleInputChange}
          >
        </input>
        </div>


        <div>
        <label htmlFor="email"> 
        <b>EMail</b>
        </label>

        <input type="email"
        name="email" 
        placeholder="enter your mail id"
         required
         autoComplete='off'
          value={user.email}
         onChange={handleInputChange}
          >
        </input>
        </div>


        <div>
        <label htmlFor="password"> 
        <b>Password</b>
        </label>

        <input type="password"
        name="password" 
        placeholder="enter your password"
         required
         autoComplete='off'
         value={user.password}
         onChange={handleInputChange}
          >
        </input>
        </div>
   <button type="submit"> Submit</button>
      </form>
    </div>
  )
}

export default Registrationhandle
