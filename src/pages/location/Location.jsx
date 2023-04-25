import React from 'react'
import { FiArrowUp, FiChevronDown } from "react-icons/fi";
function Location() {
  return (
    div className="min-h-screen flex flex-col justify-between bg-white m-0">
       <header className="flex justify-center py-6 w-full">
         <h1 className="text-4xl font-bold text-center text-green-500">
           Move comfortably anywhere anytime
         </h1>
       </header>
       <div className="flex flex-col md:flex-row  justify-center w-full px-8">
       {/* <img src={pickup} alt="Left" className="w-1/4 md:w-1/5 object-cover h-full" /> */}
       <div className="flex-1 flex justify-center items-center">
         <div className="flex flex-col md:flex-row items-center ml-8 rounded-lg">
         <div className="relative flex-1">
               <input
                 type="text"
                 placeholder="Pickup location"
                 className="w-full h-16 py-4 pl-6 pr-2 text-lg text-black placeholder-black border border-gray-300 rounded-full focus:outline-none focus:shadow-outline-green"
               />
               </div>
             {/* <FiChevronDown className="text-2xl text-gray-500" /> */}
             <div className="relative flex-1">
               <input
                 type="text"
                 placeholder="Dropoff location"
                 className="w-full h-16 py-4 pl-6 pr-2 text-lg text-black placeholder-black border border-gray-500 rounded-full focus:outline-none focus:shadow-outline-green"
               />
               <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                 <FiChevronDown className="text-white text-xl" />
               </div>
             </div>
             <button className="w-full md:w-auto h-16 py-4 px-6 text-lg text-white font-bold bg-green-500 rounded-full hover:bg-gray-900 focus:outline-none focus:shadow-outline-green">
               Get Quote
             </button>
           </div>
         </div>
         </div>
       <div className="flex flex-col justify-center items-center px-8 md:px-0">
         <h2 className="text-2xl font-bold text-center text-gray-700 mt-12 mb-4">
           Why choose us?
         </h2>
         <p className="text-lg text-center text-gray-600 mb-8">
           We provide a seamless and stress-free moving experience for all your
           belongings.
         </p>
         <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <li className="bg-gray-200 rounded-lg shadow-md p-8">
             <h3 className="text-2xl font-bold text-green-500 mb-2">Safety First</h3>
             <p className="text-gray-700">
               We prioritize the safety of your belongings and ensure they are
               moved with the utmost care.
             </p>
           </li>
           <li className="bg-gray-200 rounded-lg shadow-md p-8">
             <h3 className="text-2xl font-bold text-green-500 mb-2">On-Time Delivery</h3>
 <p className="text-gray-700">
 We understand the importance of timely delivery and make sure your
 belongings reach their destination on time.
 </p>
 </li>
  )
}

export default Location