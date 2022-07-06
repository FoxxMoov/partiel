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
      text: "Nombre d'enfants aidé  depuis la création de l'association en 1997",
    },
  },
};

const labels = [];
for (var i = 1997; i <= 2022; i++) {
  labels.push(JSON.stringify(i));
}

export const data = {
  labels,
  datasets: [
    {
      label: "Nombre d'enfants aidé",
      data: labels.map(() => Math.floor(Math.random() * 12000) + 100),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.5,
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
