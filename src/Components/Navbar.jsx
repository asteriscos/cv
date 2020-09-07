import React from "react";
import { Link, useLocation } from "react-router-dom";
import pdf from "../federico-rodriguez.pdf";
import LanguageSelector from "./LanguageSelector";
import { Text } from '../Containers/Language';

const Navbar = function (props) {
  let location = useLocation();
  return (
    <div className={"navbar"}>
      <LanguageSelector></LanguageSelector>
      <ul>
        <li className={location.hash.includes("about") ? "active" : ""}>
          <a href={"#about"} className="">
            <i className="icon-user"></i>
            <span className="label"><Text tid={"aboutBtn"}/></span>
          </a>
        </li>
        <li
          className={location.hash.includes("experiences") ? "active" : ""}
        >
          <a href={"#experiences"} className="">
            <i className="icon-briefcase"></i>
            <span className="label"><Text tid={"experienceBtn"}/></span>
          </a>
        </li>
        <li className={location.hash.includes("education") ? "active" : ""}>
          <a href={"#education"} className="">
            <i className="icon-graduation"></i>
            <span className="label"><Text tid={"educationBtn"}/></span>
          </a>
        </li>
        <hr />
      </ul>
      <div className="download-wrapper">
        <a href={pdf} className="">
          <i className="icon-cloud-download"></i>
          <span className="label"><Text tid={"downloadBtn"}/></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
