import React from "react";
import "../../css/about.scss";
import { Text } from "../../Containers/Language";

export default () => {
  return (
    <div>
      <div className="row about-header">
        <div className="col bg-black-9 d-flex f-center mb-2">
          <div className="avatar-wrapper mx-3">
            <img
              className="avatar"
              src="data:image/jpeg;base64,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"
            />
            <div className="shadow"></div>
          </div>
          <div className="overlay-avatar">
            <p className="fullname">Federico Matias Rodriguez</p>
            <p className="text-primary">Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="row about-body d-flex f-wrap">
        <div className="col d-flex-v f-center flex-0-1 sm-100">
          <div className="about-details">
            <ul className=" p-1 o-09">
              <li className="">
                <i className=" icon-user"></i> 35 <Text tid={"Years"} />
              </li>
              <li className="">
                <i className=" icon-globe"></i> Barcelona, <Text tid={"Spain"} />
              </li>
              <li className="">
                <i className=" icon-envelope"></i>
                federicomatias.rodriguez@gmail.com
              </li>
              <li className="">
                <a
                  className=""
                  href="https://www.linkedin.com/in/federico-matias-rodriguez/"
                >
                  <i className=" icon-social-linkedin"></i>LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col flex-1-1 bg-dark sm-100 border-r3">
          <div className="">
            <p className="whoiam p-1">
              <Text tid={"aboutmeDescription"} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};