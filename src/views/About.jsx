import React from "react";
import SauHeader from "../components/SauHeader";
import SauFooter from "../components/SauFooter";

function About() {
  return (
    <>
      <SauHeader />
      <h2 style={{ textAlign: "center", color: "blue" }}>About UI</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        distinctio doloremque, commodi non laudantium beataeluta, nisi?
      </p>
      <SauFooter />
    </>
  );
}

export default About;
