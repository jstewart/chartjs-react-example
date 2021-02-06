import React, { useCallback, useEffect, useState } from 'react';
import Chart from 'chart.js';
import { useHookWithRefCallback } from '../hooks';

const defaultOptions = {
  type: 'bar',
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

const BarChart = ({ data }) => {
  const [chart, setChart] = useState();
  // Note that this has to be memoized in order to not create
  // an endless re-rendering loop
  const createChart = useCallback(
    (node) => {
      setChart(new Chart(node, { ...defaultOptions, data }));
    },
    [data]
  );
  const chartRef = useHookWithRefCallback(createChart);

  useEffect(() => {
    if (!chart) return;
    chart.data = data;
    chart.update();
  }, [chart, data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
