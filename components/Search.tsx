import React, { useState } from 'react'

const Search = () => {
    const[search,setSearch]=useState("")
  return (
    // <div className="max-w-[750px] bg-[#F0F8FF] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
    //   <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
    //   <input
    //     type="text"
    //     value={search}
    //     onChange={(e) => setSearch(e.target.value)}
    //     className="bg-[#F0F8FF] text-black border-none lg:w-full focus:ring-0 outline-none placeholder-black text-xs"
    //     placeholder="Search..."
    //   />

    //   <div className="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto">
    //     <div className="flex space-x-2 pr-5">
    //       <button className="tag">Minimal</button>
    //       <button className="tag">House</button>
    //       <button className="tag">Minimal</button>
    //     </div>

    //     <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
    //       <MdOutlineShortText className="text-2xl animate-pulse" />
    //       <span className="font-medium text-sm">Filters</span>
    //     </div>
    //   </div>
    // </div>
    <div
    className="p-4 flex flex-row items-center w-full space-x-3"
    style={{ animation: `fadeIn 1000ms ease-out` }}
  >
    <div className="text-sm flex-1 flex flex-row items-center">
      {" "}
      <input
        autoFocus={true}
      
        value={search}
        // className="bg-[#F0F8FF] text-black border-none lg:w-full focus:ring-0 outline-none placeholder-black text-xs"
        className="block w-full px-2 py-2 text-black bg-white border rounded-full focus:border-black focus:ring-[#3e4555] focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Search by"
        onChange={(e) => setSearch(e.target.value)}
      />
   
    </div>
    <button onClick={()=>{}} className="px-4 py-2 text-sm text-blue-100 bg-[#004F95]  rounded shadow">
                Add new
            </button>
            <button onClick={()=>{}} className="px-4 py-1 text-sm text-blue-100 bg-[#004F95]  rounded shadow">
        singn in
            </button>
            <button onClick={()=>{}} className="px-4 py-1 text-sm text-blue-100 bg-[#F78117]  rounded shadow">
            sign up
            </button>

    {/* <div className="mx-2 border rounded-full cursor-pointer flex flex-row whitespace-nowrap">
      <div
        onClick={() => setQueryType(true)}
        className="p-1 border-r-2 rounded-l-full px-4"
        style={{
          backgroundColor: isQueryTypeMovieName ? "#3e4555" : "white",
          color: isQueryTypeMovieName ? "white" : "black",
        }}
      >
        Movie Name
      </div>
      <div
        onClick={() => setQueryType(false)}
        className="p-1 px-4 rounded-r-full"
        style={{
          backgroundColor: isQueryTypeMovieName ? "white" : "#3e4555",
          color: isQueryTypeMovieName ? "black" : "white",
        }}
      >
        Year
      </div>
    </div> */}

    {/* <div className="p-3 flex items-center cursor-pointer">
      <ion-icon
        size="large"
        onClick={() => {
          setSearch(false), setQuery("");
        }}
        name="close"
      ></ion-icon>
    </div> */}
  </div>
  )
}

export default Search