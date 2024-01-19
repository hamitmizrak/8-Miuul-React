//

import { useReducer } from "react";

// Component
const ReducerCounterMiuul=()=>{
    // useReducer 
    const[state,dispatch]=useReducer(reducerMiuul,{count:0});

    return (
        <div>
            <p className="ms-2">Count: {state.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})} className="btn btn-primary ms-2 me-2">Artır</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}  className="btn btn-danger">Azalt</button>
        </div>
    );
} //end CounterMiuul

// ReducerMiuul
const reducerMiuul = (state, action) => {
  switch (action.type) {
    // ARTIR
    case "INCREMENT":
      return { count: state.count + 1 };

    // AZALT
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
     return state;
  } //end switch
}; //end reducerMiuul



//EXPORT 
export default ReducerCounterMiuul;
