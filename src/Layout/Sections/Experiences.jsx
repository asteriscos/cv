import React, { useEffect, useState } from "react";
import { Experience } from "../../Components";
import axios from "axios";
import "../../css/experience.scss";
import Selector from "../../Components/Selector";

export default () => {
  let [experiencies, setExperiencies] = useState([]);
  let [selected, setSelected] = useState(null);
  useEffect(() => {
    axios.get("./Data/experiences.json").then((response) => {
      setExperiencies((prev) => response.data);
      setSelected(response.data[0]);
    });
  }, []);
  return (
    <div className="animated fadeIn experiences-main">
      <div className="d-flex">
        <div className="selector-wrapper">
          <Selector items={experiencies} callback={setSelected} />
        </div>
        <div className="experiences-wrapper bg-dark">
          {selected && <Experience exp={selected} />}
        </div>
      </div>
      
    </div>
  );
};
