import React from 'react';
import Chart from 'react-google-charts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';

// const data = [...Object.entries(JSON.parse(props.languages))]
const data = [
  {
    subject: "Javascript",
    A: 120,
    B: 110,
    // fullMark: 150
  },
  {
    subject: "Python",
    A: 56,
    B: 130,
    // fullMark: 150
  },
  {
    subject: "HTML",
    A: 86,
    B: 130,
    // fullMark: 150
  },
  {
    subject: "sdfds",
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
  // {"JavaScript":227786,"HTML":99725,"CSS":67359,"SCSS":28496}
  const languages = Object.values(JSON.parse(user.languages));
  // const metrics = Object.entries(languages)
  //   .map(arr => {
  //     return ["subject", "A", "B", "fullMark"].reduce((acc, curr, idx) => {
  //       acc[curr] = arr[idx] || 150;
  //       return acc;
  //     }, {});
  //   });
  const event = () => { return  }
  return (
    <div>
      <RadarChart
      // cx={300}
      // cy={250}
      // outerRadius={90}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={45} domain={[0, 150]} />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#77c8da"
        fillOpacity={0.85}
      />
      <Radar
        name="Tyson"
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

{/* <Chart
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
/> */}