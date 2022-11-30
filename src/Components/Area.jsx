import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const _colors = [
  "#f44747",
  "#569cd6",
  "#b5cea8",
  "#6A9955",
  "#d16969",
  "#4EC9B0",
  "#C586C0",
  "#4FC1FF",
  "#C586C0",
  "#16825D",
];
const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload
    ? payload.reduce((result, entry) => result + entry.value, 0)
    : 0;

  return (
    <div className="customized-tooltip-content">
      <ul className="list">
        {payload &&
          payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${getPercent(entry.value, total)}`}
            </li>
          ))}
      </ul>
    </div>
  );
};
function getSkillsHeaders(arrExps) {
  let skills = [];
  arrExps.forEach((job) => {
    job.skills &&
      job.skills
        .flatMap((val) => val)
        .forEach((skill) => {
          if (skills.indexOf(skill.name) == -1) skills.push(skill.name);
        });
  });
  return skills;
}

function getSkillsPerYear(arrExps) {
  let years = {},
    arrYears = [],
    skills = getSkillsHeaders(arrExps);
  arrExps.forEach((job) => {
    const startYear = parseInt(job.period.start.slice(-4));
    const endYear =
      parseInt(job.period.end.slice(-4)) != NaN
        ? job.period.end.slice(-4)
        : startYear;

    if (!job.skills) return; //fail safe

    for (let year = startYear; year <= endYear; year++) {
      //init values
      if (!years[year]) years[year] = {};

      //iterate skills
      job.skills
        .flatMap((val) => val)
        .forEach((skill) => {
          years[year][skill.name] = years[year][skill.name]
            ? years[year][skill.name] + skill.value
            : skill.value;
        });
    }
  });
  for (let y in years) {
    if (years.hasOwnProperty(y)) {
      arrYears.push({
        ...years[y],
        year: y,
      });
    }
  }

  return { skills: skills, data: arrYears };
}
export default function (props) {
  let [areas, setAreas] = useState({ skills: [], data: [] });

  useEffect(() => {
    Axios.get("./Data/experiences.json").then((response) => {
      let experiencies = response.data.sort(function (a, b) {
        const dateA = new Date("01/" + a.period.start);
        const dateB = new Date("01/" + b.period.start);
        if (dateA > dateB) {
          return 1;
        }
        if (dateA < dateB) {
          return -1;
        }
        return 0;
      });
      const skillsPerYear = getSkillsPerYear(experiencies);
      setAreas((old) => skillsPerYear);
    });
  }, []);

  return (
    <div className={"areachart-wrapper"}>
      <ResponsiveContainer>
        <AreaChart
          data={areas.data}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Legend />
          {areas.skills.map((skill, index) => {
            return (
              <Area
                key={index}
                type="monotone"
                dataKey={skill}
                stackId={"1"}
                stroke={_colors[index % _colors.length]}
                fill={_colors[index % _colors.length]}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
