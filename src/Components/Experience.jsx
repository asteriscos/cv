import React,{ useContext } from "react";
import Skills from "./Skills";
import { LanguageContext } from "../Containers/Language";

export default function (props) {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="border-b-primary">{props.exp.company}</h3>
      </div>
      <div className="card-body">
        <div className="d-flex f-wrap p-1">
          <div className="exp-container">
            <h4 className="text-primary">
              {props.exp.period.start + " - " + props.exp.period.end}
            </h4>
            <h5 className="text-grey">
              {props.exp.contact ? "Reference: " + props.exp.contact : ""}
            </h5>
            <h5 className="text-grey text-normal">
              {props.exp.email ? "" + props.exp.email : ""}
            </h5>
            {props.exp.url ? (
              <a href={props.exp.url}>{props.exp.url}</a>
            ) : (
              <></>
            )}
            <h3 className={"job-title"}>{props.exp.position}</h3>
            <p className="blog-post-meta">{props.exp.description[userLanguage]}</p>
            <ul>
              {props.exp.responsabilities[userLanguage].map((resp, key) => {
                return <li key={key}>{resp}</li>;
              })}
            </ul>
          </div>
          {props.exp.skills && props.exp.skills.length && (
            <Skills data={props.exp.skills} />
          )}
        </div>
      </div>
    </div>
  );
}
