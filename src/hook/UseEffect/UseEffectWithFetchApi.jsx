import React from 'react'
import { useState, useEffect } from 'react';
import "./pikachu.css"; 
/* 
const UseEffectWithFetch  = () => {


  const [apiData, setapiData]=useState([]);


  const api="https://jsonplaceholder.typicode.com/posts";

  const fetchPokemon=()=>{
    fetch(api).then((res)=>res.json())
    .then((data)=>{setapiData(data)})
    .catch((err)=>console.log(err))
  }
useEffect(()=>{
  fetchPokemon();

},[]);


  return (
    <div>
    <ul>
      {apiData.map((currData)=>{
        return <li key={currData.id}>{currData.title}</li>
      })}
    </ul>
    </div>
  )
}

export default UseEffectWithFetch ;
 */





const UseEffectWithFetchApi = () => {

  const [pokemon,setPokemon]=useState(null);
  const [loading,setLoading]=useState(true);
  //const [error,setError]=useState("");

  const API="https://pokeapi.co/api/v2/pokemon/pikachu";


  const FetchPokemon =async()=>{
    try {

      const res=await fetch(API);
      const data=await res.json();
      setPokemon(data);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
     // setError(error);
      setLoading(false);
      
    }

  }


useEffect(()=>{
  FetchPokemon();
},[]);





if(loading){
  return(
    <div>
      <h1>loading................</h1>
    </div>
  )
}

  return (
    <div className='pika'>
      <p>{pokemon.name}</p>
      <p>{pokemon.height}</p>
      <p>{pokemon.weight}</p>
    </div>
  )
}

export default UseEffectWithFetchApi;
