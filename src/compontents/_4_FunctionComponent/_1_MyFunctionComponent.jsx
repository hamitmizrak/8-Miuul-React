// Class rcc 
// Function rfc
//rfce

// React 
import React from "react";

// FUNCTION MyFunctionComponent
function _1_MyFunctionComponent(props){

    // Object Destructing
    const {content}=props
    // RETURN
    return(
        <React.Fragment>
            <h1>My Function Component</h1>
            <p>{props.companyName} - {content}</p>
        </React.Fragment>
    ); //end return
} //end Function MyFunctionComponent

// EXPORT
export default _1_MyFunctionComponent