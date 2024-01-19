//rfc
import React from "react";
import { Link } from "react-router-dom";

import myViewPicture from "../img/dünya.png";


// EXPORT
export default function MiuulMain() {
  return (
    <div className="w-75" style={{ marginTop: "200px" }}>
      <Link to="/miuul/spa/list">
        <img src={myViewPicture} className="w-75" />
      </Link>
    </div>
  );
}
