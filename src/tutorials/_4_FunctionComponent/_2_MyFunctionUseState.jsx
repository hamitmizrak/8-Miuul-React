// rfce
import React, { useState } from "react";

// FUNCTION MyFunctionMiuulCounter
function _2_MyFunctionUseState() {
  // STATE
  const [count, setCount] = useState(0);

  // FUNCTION
  // ARTIR
 const miuulIncrease = () => {
    setCount(count + 1);
  };

  // AZALT
  const miuulDecrease = () => {
    setCount(count - 1);
  };

  // SIFIRLA
  const  miuulReset = () => {
    setCount(0);
  };

  // RETURN
  return(
    <div className="container ms-5">
          <h1> Counter</h1>
          {/* <p className="display-6">{this.state.count}</p> */}
          <p className="display-6 ms-5">{count}</p>

          <button className="btn btn-primary me-2" onClick={miuulIncrease}>
            Artır
          </button>

          <button className="btn btn-danger me-2" onClick={miuulDecrease}>
            Azalt
          </button>

          <button className="btn btn-warning me-2" onClick={miuulReset}>
            Sıfırla
          </button>
        </div>
  )  //end return
} //end MyFunctionMiuulCounter

// EXPORT
export default _2_MyFunctionUseState;
