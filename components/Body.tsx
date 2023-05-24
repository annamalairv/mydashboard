import React, { useEffect, useState } from "react";
import Search from "./Search";
import Barchart from "./Barchart";
import DoughnutChart from "./DoughnutChart";
import { LineChart } from "./lineChart";
import { Progress } from 'antd';


const Body = () => {

  return (
    <div className="bg-white w-full  ml-24 py-4 space-y-8 md:max-w-full  md:mr-2.5">
      <Search />

      {/* <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-[#F8FBFF]"> */}
      <Barchart/>
      {/* </div> */}
      <div className="grid overflow-x-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {/* {[1, 2, 3, 4].map(() => {
          return (
            <>
              {" "} */}
              <div className="w-[250px]  bg-[#F8FBFF] h-[310px] rounded-[10px] overflow-hidden relative text-black/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"> <DoughnutChart title={"Expence"}/></div>
             
              <div className="w-[250px]  bg-[#F8FBFF] h-[310px] rounded-[10px] overflow-hidden relative text-black/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"> 
              <div className='flex justify-center text-[#004F95] text-bold m-auto mt-5'>In service</div>
              <img src="\assets\images\spanner.png" className="h-20 flex justify-center  m-auto mt-5" alt=""></img>
              <div className="flex flex-row space-x-6 items-center m-auto justify-center mt-10 ">
                <div className="flex flex-col">
                  <div className="text-[#004F95]">Total Servies</div>
                  <div className="text-[#004F95] font-bold flex m-auto items-center justify-center">36</div>

                </div>
                <div className="flex flex-col">
                  <div className="text-[#004F95]">Open Service</div>
                  <div className="text-[#004F95] font-bold flex m-auto items-center justify-center">36</div>

                </div>

              </div>
               </div>
              <div className="w-[250px]  bg-[#F8FBFF] h-[310px] rounded-[10px] overflow-hidden relative text-black/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"> <DoughnutChart title={"Total Assets"} value={"46"}/></div>
              <div className="w-[250px]  bg-[#F8FBFF] h-[310px] rounded-[10px] overflow-hidden relative text-black/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto">
              <div className='flex justify-center text-[#004F95] text-2xl text-bold m-auto mt-5 items-center'>Incident<br/>
Management</div>
<div className="px-4 mt-4">
            <h2 className="text-[#004F95] text-xl">cleared</h2>
              <Progress percent={90} strokeColor="#29A343" className="ant-progress-bg rounded-none" style={{ '--progress-height': '30px'  } as React.CSSProperties}/>
              </div>
              <div className="px-4 mt-4">
            <h2 className="text-[#004F95] text-xl"> not cleared</h2>
              <Progress percent={60} strokeColor="#E12C33" className="ant-progress-bg rounded-none" style={{ '--progress-height': '30px'  } as React.CSSProperties}/>
              </div>
                
                 </div>
            {/* </>
          );
        })} */}
      </div>
      <div className="flex mt-[22px] px-10 w-full gap-[30px]">
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className=" flex items-center justify-between py-[20px]  ">
<h2 className="text-2xl text-[#004F95] flex m-auto justify-center items-center">Departments</h2>
          </div>
          <div className="px-[25px] space-y-[10px] py-[10px]">
            <div>
            <h2 className="text-[#004F95] text-xl">Laboratory</h2>
              <Progress percent={91} strokeColor="#004F95"  />
              </div>
              <div>
            <h2 className="text-[#004F95] text-xl">Radiology</h2>
              <Progress percent={53} strokeColor="#3DA5D9"  />
              </div>
              <div>
            <h2 className="text-[#004F95] text-xl">ICU</h2>
              <Progress percent={98} strokeColor="#73BFB8"  />
              </div>
              <div>
            <h2 className="text-[#004F95] text-xl">Operation Theator</h2>
              <Progress percent={75} strokeColor="#FEC601"  />
              </div>
              <h2 className="text-[#004F95] text-xl">OPD</h2>
              <Progress percent={36} strokeColor="#EA7317"  />
              </div>
              <div className="flex items-center justify-center underline text-2xl text-[#004F95]">see more</div>
          
          
        </div>
        <div className="basis-[70%] border shadow-md flex m-auto justify-center items-center w-full p-5 ">

           <LineChart /></div>

        </div>

        {/* //// */}
        <div className="flex mt-[22px] px-10 w-full gap-[30px]">
        <div className="basis-[60%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className=" flex items-center justify-between py-[20px]  ">
<h2 className="text-2xl text-[#004F95] flex m-auto justify-center items-center">Calibrated</h2>
          </div>
          <div className="px-[25px] space-y-[10px] py-[10px]">
       
              <div>
            <h2 className="text-[#004F95] text-xl">Calibrated</h2>
              <Progress percent={98} strokeColor="#73BFB8"  />
              </div>
              <div>
            <h2 className="text-[#004F95] text-xl">Not Calibrated</h2>
              <Progress percent={28} strokeColor="#FEC601"  />
              </div>
              <h2 className="text-[#004F95] text-xl">Not Required</h2>
              <Progress percent={36} strokeColor="#EA7317"  />
              </div>
              {/* <div className="flex items-center justify-center underline text-2xl text-[#004F95]">see more</div> */}
          
          
        </div>
        <div className="basis-[20%] border shadow-md flex m-auto justify-center items-center w-full p-5 ">

           {/* <LineChart /></div> */}
           <div className="w-[250px]   h-[310px] rounded-[10px] overflow-hidden relative text-black/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"> 
              <div className='flex justify-center text-[#004F95] text-bold m-auto mt-5'>Manuals</div>
              <img src="\assets\images\spanner.png" className="h-20 flex justify-center  m-auto mt-5" alt=""></img>
              <div className="flex flex-col space-y-4 px-6 mt-10">
          
                 
              <button onClick={()=>{}} className="px-4 py-1 text-sm text-blue-100 bg-[#004F95]  rounded shadow">
        User Manual
            </button>
            <button onClick={()=>{}} className="px-4 py-1 text-sm text-blue-100 bg-[#004F95]  rounded shadow">
        service Manual
            </button>
            </div>

              
          
               </div>

        </div>
        <div className="basis-[20%] border shadow-md flex m-auto justify-center items-center w-full p-5 ">

           {/* <LineChart /></div> */}
           <div className="w-[250px]   h-[310px] rounded-[10px] overflow-hidden relative text-black/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"> 
              <div className='flex justify-center text-[#004F95] text-bold m-auto mt-5'>Warrenty</div>
              <img src="\assets\images\spanner.png" className="h-40 flex justify-center  m-auto mt-5" alt=""></img>
        
               </div>

        </div>
        </div>

        {/* ///// */}

     
    </div>
  );
};

export default Body;
