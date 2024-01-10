import logo from '../../logo.svg';

// External Css
import './Style.css';

// React
import React from 'react';

// FUNCTION
function Style() {

  // Css Object
  const allParagrafCss = {
    backgroundColor: "#f2f2f2",
    color: "blue",
    padding:"1rem",
  };

  // RETURN
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-center text-warning">
          Merhabalar Miuul React Dünyası
        </p>
        <hr />
        <p style={{ color: "yellow", backgroundColor: "blue" }}>Inline CSS</p>
        <br />
        <p style={allParagrafCss} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nesciunt quas, iure quidem provident fugiat repellat obcaecati sapiente necessitatibus vel corrupti laboriosam hic aliquam deserunt dolor, dignissimos, at quibusdam vero.
          Omnis, officiis est alias magni praesentium officia excepturi nobis laudantium deleniti rem earum accusamus repudiandae impedit commodi tenetur beatae quasi doloremque ipsam eos! Nam, explicabo rem error harum ipsum deleniti?</p>
      </header>
    </div>
  );
}

// EXPORT
/* */
export default Style;
