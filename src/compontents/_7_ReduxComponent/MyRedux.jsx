import React from 'react'

import{useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from '../../actions/CounterActions';

// FUNCTION
function MyRedux() {

const count=useSelector((state)=> state.counter.count);
const dispatch= useDispatch();

  return (
    <div>
      <h1>My Redux Counter</h1>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch(increment())} className="btn btn-primary">Artır</button>
      <button onClick={()=>dispatch(decrement())} className="btn btn-danger">Azalt</button>
      </div>
  )
}

// EXPORT
export default MyRedux;