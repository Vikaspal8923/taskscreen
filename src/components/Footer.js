
import React, { useState } from 'react';
import { AiFillHome, AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { MdTaskAlt, MdLeaderboard } from 'react-icons/md';

const Footer = ()=>{
             
    const [activeTab, setActiveTab] = useState(0); // Index of the active tab

    const navItems = [
        { icon: <AiFillHome size={24} />, label: 'Home' },            // Home Icon
        { icon: <AiOutlinePlus size={24} />, label: 'Add' },          // Plus Sign Icon
        { icon: <AiOutlineSetting size={24} />, label: 'Settings' },  // Settings Icon
        { icon: <MdTaskAlt size={24} />, label: 'Tasks' },            // Task Notebook Icon
        { icon: <MdLeaderboard size={24} />, label: 'Leaderboard' },  // Leaderboard Icon
      ];
  

         return (

            <div className=" bg-blue-600 rounded-t-lg sticky bottom-0  px-1.5 w-full z-50 ">
          
              
            <div className="relative transition-all duration-200    shadow-lg rounded-lg p-5 flex justify-between items-center">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`relative   flex flex-col items-center ${
            activeTab === index ? 'text-white' : ' text-gray-900'
          }`}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
          {activeTab === index && (
            <div className="absolute -top-8 h-8 w-8 flex items-center justify-center bg-white rounded-full">
                      <div className=" w-[70%] h-[70%] bg-blue-600 rounded-full"  ></div>
            </div>
          )}
        </button>
      ))}

      

             </div>
              
              
      
          </div>
          
          
         )

}
export default Footer;




