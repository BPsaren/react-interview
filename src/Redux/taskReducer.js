//Note that- old state can not be update(mutable)


import {createStore} from "redux";

//ki mi taks hote pare
const ADD_TASK="task/add";
const DELETE_TASK="task/delete";

const initialState={
    //task means akhane vivinno dhoroner task hote pare, may be filter kora, update kora, delete etc
    task:[],
};

const taskReducer=(state=initialState,action)=>{
    //users ki dhoRoner case find out korte chaiche
  switch (action.type) {
    case ADD_TASK:
      return {
        //sate k sprade korbo mane old state update kora jabe na 
        ...state,
        //. dilam karon previous data same ai thakuk but natun data ami end a add korbo
        task:[...state.task,action.payload],
      }



      case DELETE_TASK:


        const updateTask=state.task.filter((currIndex,index)=>{
                 return index!== action.payload;
        })
        return {
            ...state,
              task:updateTask,
        }
  
    default:
    return state;
  }
}
export default taskReducer;

const store=createStore(taskReducer);
console.log(store);


console.log("initial state ",store.getState());