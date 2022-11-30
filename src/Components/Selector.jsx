import React, { useEffect, useState } from "react";

export default function (props) {
  let [selected, setSelected] = useState(0);

  useEffect(() => {
    props.items &&
      props.items.length &&
      props.callback &&
      props.callback(props.items[selected]);
  }, [selected]);

  return (
    <div className="selector">
      <ul className="selected">
        {props.items.map((item, key) => (
          <li
            className={key == selected ? "active" : ""}
            key={key}
            onClick={() => {
              setSelected(key);
            }}
          >
            <span className="circle"></span>
            <p className="label">
              <span className="start">{item.period.start}</span>
              <span className="end"> {" - " + item.period.end}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
