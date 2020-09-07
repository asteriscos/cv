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
      {/* <p className="desc">Anything you want can be displayed here.</p> */}
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
            // outerRadius={100}  
            data={props.data.flatMap((val) => val)}
          >
            {/* <PolarGrid /> */}
            <PolarAngleAxis stroke="#ccc" dataKey="name" />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            {/* <Radar
              name="Front"
              dataKey="front"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            /> */}
            {/* <Legend /> */}
            {/* <Tooltip content={<CustomTooltip />} /> */}
          </RadarChart>
          {/* <PieChart >
          {props.data[0] && (
            <Pie
              data={props.data[0]}
              dataKey="value"
              outerRadius={60}
              fill="#8884d8"
            >
              {props.data[0].map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          )}
          {props.data[1] && (
            <Pie
              data={props.data[1]}
              dataKey="value"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
            >
              {props.data[1].map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          )}
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart> */}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
