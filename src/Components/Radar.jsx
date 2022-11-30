import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
    <div className="radar-wrapper">
      <ResponsiveContainer>
        {props.data[0] && (
          <RadarChart
            outerRadius={100}
            width={600}
            height={500}
            data={props.data[0]}
          >
            <PolarGrid />
            <PolarAngleAxis stroke="#ccc" dataKey="name" />
            <Radar
              name="Back"
              dataKey="back"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Front"
              dataKey="front"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
