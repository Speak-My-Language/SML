import React from 'react';
import Chart from 'react-google-charts';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from 'recharts';

// const data = [...Object.entries(JSON.parse(props.languages))]
let data = [
  {
    subject: 'Javascript',
    A: 120,
    B: 110,
    // fullMark: 150
  },
  {
    subject: 'HTML',
    A: 86,
    B: 130,
    // fullMark: 150
  },
  {
    subject: 'CSS',
    A: 34,
    B: 130,
    // fullMark: 150
  },
];

/**
 * Contains chart to be used for displaying language percentage breakdown
 * languages in props is passed in from ProgramContainer
 */

function ChartContainer({ user, match }) {
  const userL = JSON.parse(user.languages);
  const matchL = JSON.parse(match.languages);

  const radars = Object.keys(userL)
    .filter((key) => matchL.hasOwnProperty(key))
    .reduce((acc, curr, idx) => {
      acc[idx] = curr;
      return acc;
    }, [])
    .reduce((acc, curr, idx) => {
      acc[idx] = {
        subject: curr,
        A: Math.min(Math.round(userL[curr] / 10000), 150),
        B: Math.min(Math.round(matchL[curr] / 10000), 150),
        fullMark: 150,
      };
      return acc;
    },[]
  );

  return (
    <div>
      <RadarChart width={500} height={500} data={radars}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name={user.name}
          dataKey="A"
          stroke="#8884d8"
          fill="#77c8da"
          fillOpacity={0.85}
        />
        <Radar
          name={match.name}
          dataKey="B"
          stroke="#77c8da"
          fill="#8884d8"
          fillOpacity={0.18}
        />
        <Legend />
      </RadarChart>
    </div>
  );
}
export default ChartContainer;

{
  /* <Chart
  width="500px"
  height="300px"
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[['language', 'bytes'], ...Object.entries(JSON.parse(props.languages))]}
  options={{
    title: 'Language Breakdown',
    backgroundColor: 'chartreuse',
    font: 'helvetica',
  }}
/> */
}
