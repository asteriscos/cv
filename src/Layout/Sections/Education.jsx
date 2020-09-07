import React from "react";
import "../../css/education.scss";
import {Area} from "../../Components";
import { Text } from "../../Containers/Language";

export default () => {
  return (
    <div className="container education-wrapper animated fadeIn ">
      <div className="d-flex f-wrap">
        <div className="flex-1-0  bg-dark  sm-100">
          <div className="card sub-education">
            <div className="card-header ">
              <h2 className="title border-b-primary"><Text tid={"Education"} /></h2>
            </div>
            <div className="card-body text-left">
              <h4 className="text-primary">2013</h4>
              <h5 className="text-softgrey">
              <Text tid={"Superior Software Programming Technician"} />
              </h5>
              <p className="text-lightgrey">
              <Text tid={"National Technological University"} />          
              </p>

              <h4 className="text-primary">2002</h4>
              <h5 className="text-softgrey">First Certificate in English</h5>
              <p className="text-lightgrey">Instituto Británico del Norte</p>

              <h4 className="text-primary">2018</h4>
              <h5 className="text-softgrey">ReactJS; Angular</h5>
              <p className="text-lightgrey">EducacionIT</p>

              <h4 className="text-primary">2019</h4>
              <h5 className="text-softgrey">
              <Text tid={"Negotiation and effective communication; Leadership and team managment"} />
              </h5>
              <p className="text-lightgrey">EducacionIT</p>
            </div>
          </div>
        </div>
        <div className="flex-1-0 d-flex-v sm-100">
          <div className="card sub-skills d-flex-v flex-1-0">
            <div className="card-header flex-0-1">
              <h2 className="title border-b-primary "><Text tid={"Skills"} /></h2>
            </div>
            <div className="card-body flex-1-1 d-flex-v f-center">
              <Area/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
