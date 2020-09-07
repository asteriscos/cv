import React, { useEffect, useState } from "react";
import "../css/progress.scss";

export default function ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      value: "0%",
      color: "white",
    },
  ],
}) {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0 + "%";
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.value + "%";
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className="progressLabel">{label}</div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color,
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
      <div className="references">
        <ul>
          {visualParts.map((item, index) => {
            return (
              <li key={index}>
                <span
                  className="color-ref"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="label-ref">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
