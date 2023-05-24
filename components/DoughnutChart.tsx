import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({title,value}:{title:any,value?:any}) => {
     const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [19, 12, 5, 8, 10],
            backgroundColor: [
              'rgba(0, 31, 58.4)',
              'rgba(61, 165, 217)',
              'rgba(254, 198, 1)',
              'rgba(234,115,23)',
              'rgba(115,191,184)',
             
            ],
            borderColor: [
              'rgba(0, 31, 58.4)',
              'rgba(61, 165, 217)',
              'rgba(254, 198, 1)',
              'rgba(234,115,23)',
              'rgba(115,191,184)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {
        responsive: true,
        legend: {
          display: true,
          position: 'right',
        },
        title: {
          display: true,
          fontSize: 20,
          text: 'Expenses',
          
        }
      }
      
  return (
    <>
    <div className='flex justify-center text-[#004F95] text-bold m-auto mt-5'>{title}</div>
    <div  className='w-full  lg:h-[30vh] h-[20vh] m-auto  flex justify-center text-center'><Doughnut data={data} options={options} /></div>
    <div className='flex justify-center text-[#004F95] text-2xl text-bold m-auto mt-2'>{value}</div>
    </>
  )
}

export default DoughnutChart