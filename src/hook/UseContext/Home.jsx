import React from 'react'
/* import { useContext } from 'react'
import { BioContext } from './Index' */
import { useBioContext } from './Index'
const Home = () => {
    //const {Name,Age}=useContext(BioContext)
    const {Name,Age}=useBioContext();
  return (
    <div>
        <h1>My name is {Name} and My age is {Age}</h1>
      
    </div>
  )
}

export default Home;
