import React from 'react'

const Index = () => {
  return (
    <div>
      <section>
        <h1>i am parent component</h1>
        <ChildComponent  data="i love react js"/>
      </section>
    </div>
  );
}

const ChildComponent =(props)=>{
  return ( <div>
    <section>
       <h1>i am child A</h1>
       <GrandchildComponent  data={props.data}/>
     </section>
   </div>
   )
   
}

const GrandchildComponent=(props)=>{
    return (
        <div>
        <section>
           <h1>i am child B</h1>
           <GrandGrandchildComponent  data={props.data}/>
         </section>
       </div>
    )
  
}

const GrandGrandchildComponent=(props)=>{
    return (
<div>
     <section>
        <h1>i am child C</h1>
        <h2>i love dsa {props.data}</h2>
      </section>
    </div>
    )
    
}




export default Index;
