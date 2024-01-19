import logo from '../../logo.svg';

// External Css

// React
import React from 'react';

// FUNCTION
function JsxTutorials() {

  // Css Object
  const allParagrafCss = {
    backgroundColor: "#f2f2f2",
    color: "blue",
    padding: "1rem",
  };

  // Variable
  const elementMiuul = (
    <div>
      <h1>Merhabalar <mark>Miuul</mark> JSX</h1>
    </div>
  );

  // RETURN
  return (
    <React.Fragment>
      <span>{elementMiuul}</span>
    </React.Fragment>
  );
}

// EXPORT
/* */
export default JsxTutorials;
