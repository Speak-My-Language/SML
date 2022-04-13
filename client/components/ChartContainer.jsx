import React from 'react';
import Chart from 'react-google-charts';

/**
 * Contains chart to be used for displaying language percentage breakdown
 * languages in props is passed in from ProgramContainer
 */

function ChartContainer(props) {
  return (
    <div>
      <Chart
        width="500px"
        height="300px"
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['language', 'bytes'],
          ...Object.entries(JSON.parse(props.languages)),
        ]}
        options={{
          title: 'Language Breakdown',
          backgroundColor: 'chartreuse',
          font: 'helvetica',
        }}
      />
    </div>
  );
}
export default ChartContainer;
