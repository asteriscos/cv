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
      {/* <p className="desc">Anything you want can be displayed here.</p> */}
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
            {/* <PolarRadiusAxis angle={30} domain={[0, 100]} /> */}
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
        {/* <PieChart >
          {props.data[0] && (
            <Pie data={props.data[0]} dataKey="value" outerRadius={60} fill="#8884d8" >
              {props.data[0].map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          )}
          {props.data[1] && ( <Pie data={props.data[1]} dataKey="value" innerRadius={70} outerRadius={90} fill="#82ca9d" >
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
  );
}
