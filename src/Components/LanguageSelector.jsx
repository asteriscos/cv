import React, { useContext, useEffect } from "react";

import { languageOptions } from "../Languages";
import { LanguageContext } from "../Containers/Language";
import "../css/languages.scss";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => {
    userLanguageChange(userLanguage == "en" ? "es" : "en");
  };
  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("rcml-lang");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <div className={"lang-wrapper"} onClick={handleLanguageChange}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <div
          key={id}
          data-lang={id}
          className={name + (userLanguage == id ? " " : " slide-bck-center")}
        >
          <img
            src={require("../images/" + id + ".png")}
            alt={name}
            title={name}
            className={""}
          />
        </div>
      ))}
    </div>
  );
}
