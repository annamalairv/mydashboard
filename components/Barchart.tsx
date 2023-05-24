import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
  
  // const [chartOptions, setChartOptions] = useState({});

  const chartData={
    labels: ['week1', 'week2', 'week3', 'week4', 'week5','week6',"week7"],
    datasets: [
        {
            label: 'Sales $',
            data: [12, 28,6,13,23,13,20,17],
            borderColor: 'rgb(254, 198, 1)',
            backgroundColor: 'rgb(254,198,1)',
          }, 
    ] 
  }
  const chartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      fontSize: 20,
      text: 'Daily Revenue',
      
    },
    maintainAspectRatio: false,

  }
//   const chartOptions={  plugins: {
//     legend: {
//         position: 'top',
//     },
//     title: {
//         display: true,
//         text: 'Daily Revenue'
//     }
// },

// }
 

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] flex justify-center m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default Barchart;
