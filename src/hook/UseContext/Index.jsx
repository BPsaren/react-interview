import  { createContext ,useContext} from 'react';

// Create the context
export const BioContext = createContext();

// Define the Index component
export const Index = ({ children }) => {
  const Name = "BishnuPada";
  const Age = "25";

  return (
    <>
      <BioContext.Provider value={{Name,Age}}>
        {children}
      </BioContext.Provider>
    </>
  );
};


export const useBioContext=()=>{
  const context=useContext(BioContext )
  return context;
}