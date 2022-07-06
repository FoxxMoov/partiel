import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May'];

export const data = {
  labels,
  datasets: [
    {
      label: "Nombre d'enfants aidé",
      data: [1000, 3000, 2000, 1400, 900],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.1,
    },
  ],
};

export const FirstChart = () => {
  return (
    <div className='chart'>
      <Line options={options} data={data} />
    </div>
  );
};
