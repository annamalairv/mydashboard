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
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7','8','9'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data:[12,43,65,34,23,42,12],
      borderColor: '#004F95',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};

export function LineChart() {
  return (
    <div className='w-full'>
                  <div className="text-[#004F95] text-2xl">Total downTown</div>
                  <Line options={options} data={data} />;
    </div>
  )
 
}
