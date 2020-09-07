import React, { useEffect, useRef } from "react";
import picasso from "picasso.js";
import axios from "axios";

export default function () {
  let wrapper = useRef(null);
  let chart;
  useEffect(() => {
    axios
      .get("./Data/gantt-data.json")
      .then((response) => {
        chart = initGantt(wrapper.current, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [wrapper]);
  return <div className="gantt-wrapper" ref={wrapper}></div>;
}
function initGantt(wrapper, data) {
  return picasso.chart({
    element: wrapper,
    data,
    settings: {
      scales: {
        y: {
          data: { extract: { field: "Category" } },
        },
        t: {
          data: { fields: ["Started", "Ended"] },
          expand: 0.1,
        },
      },
      components: [
        {
          type: "grid-line",
          x: "t",
        },
        {
          type: "axis",
          dock: "left",
          scale: "y",
        },
        {
          type: "axis",
          dock: "bottom",
          scale: "t",
          formatter: {
            type: "d3-time",
            format: "%Y-%m",
          },
        },
        {
          key: "bars",
          type: "box",
          data: {
            extract: {
              field: "Category",
              props: {
                start: { field: "Started" },
                end: { field: "Ended" },
              },
            },
          },
          settings: {
            orientation: "horizontal",
            major: { scale: "y" },
            minor: { scale: "t" },
            box: {
              width: 0.8,
            },
          },
        },
        {
          type: "labels",
          displayOrder: 2,
          settings: {
            sources: [
              {
                component: "bars",
                selector: "rect",
                strategy: {
                  type: "bar",
                  settings: {
                    direction: "right",
                    labels: [
                      {
                        placements: [
                          {
                            position: "outside",
                          },
                        ],
                        label: (node) =>
                          `${Math.round(
                            (node.data.end.value - node.data.start.value) /
                              864e5
                          )} days`,
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      ],
    },
  });
}
