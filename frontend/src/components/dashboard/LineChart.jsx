import React from 'react';
import { Line } from 'react-chartjs-2'; // Importing the Line chart component from react-chartjs-2
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Define chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        fill: false, // Disable filling the area under the line
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Sales Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
