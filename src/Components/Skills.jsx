import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ProgressBar from "./ProgressBar";

const CustomTooltip = function (props) {
  const { payload, label } = props;
  return props.active ? (
    <div className="custom-tooltip">
      <p className="label">{`${payload[0].name} : ${payload[0].value}%`}</p>
    </div>
  ) : (
    <div></div>
  );
};

export default function (props) {
  return (
    <div className="charts-wrapper">
      <div className="progress-wrapper">
        {props.data[0] && (
          <ProgressBar label="Front" visualParts={props.data[0]} />
        )}
        {props.data[1] && (
          <ProgressBar label="Back" visualParts={props.data[1]} />
        )}
      </div>
      <div className="radar-wrapper">
        <ResponsiveContainer>
          <RadarChart
            data={props.data.flatMap((val) => val)}
          >
            <PolarAngleAxis stroke="#ccc" dataKey="name" />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
