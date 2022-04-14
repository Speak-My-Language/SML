import React, { Component } from 'react';
import Chart from 'react-google-charts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// const data = [...Object.entries(JSON.parse(props.languages))]
const data = [
  {
    subject: "Javascript",
    A: 120,
    // B: 110,
    // fullMark: 150
  },
  {
    subject: "Python",
    A: 56,
    // B: 130,
    // fullMark: 150
  },
  {
    subject: "HTML",
    A: 86,
    // B: 130,
    // fullMark: 150
  },
  {
    subject: "sdfds",
    A: 34,
    // B: 130,
    // fullMark: 150
  },
];

function ChartContainer(props) {
  return (
    <div>
      <RadarChart
      // cx={300}
      // cy={250}
      // outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
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