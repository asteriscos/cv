import React, { useState, useContext } from "react";

import { About, Education, Experiences } from "./Sections/";
import { Navbar } from "../Components";
import { useLocation, Switch, Route } from "react-router-dom";

const Layout = function () {
  const { section, setSection } = useState("about");
  let location = useLocation();
  return (
    <div className={"layout"}>
      <Navbar></Navbar>
      <div className="maincontent">
        <section id="about">
          <About />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="education">
          <Education />
        </section>
      </div>
    </div>
  );
};
export default Layout;
