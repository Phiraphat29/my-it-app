import React from "react";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <div style={{ textAlign: "center", fontFamily: "serif" }}>
      <br />
      <Link to={"/"}>HOME</Link>
      |
      <Link to={"/about"}>ABOUT</Link>
      |
      <Link to={"/contact"}>CONTACT</Link>
      |
      <Link to={"/login"}>LOGIN</Link>
      |
      <Link to={"/product"}>PRODUCT</Link>
      |
      <Link to={"/register"}>REGISTER</Link>
      |
      <Link to={"/travel"}>TRAVEL</Link> 
      |
      <br />
    </div>
  );
}

export default Navigator;
