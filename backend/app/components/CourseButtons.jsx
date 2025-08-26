import React from "react";
import Link from "next/link";

const CourseButtons = ({url}) => {
  return (
    <div>
     
    <div className="flex flex-wrap gap-4 p-6">
       <Link href={`${url}/web-development`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Web Development
          </button>
      </Link>
      
      <Link href={`${url}/digital-marketing`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Digital Marketing
        </button>
      </Link>
     
     

      <Link href={`${url}/data-science`}>
       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Data Science
      </button>
      </Link>
     

      <Link href={`${url}/mobile-app-development`}>
       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Mobile App Development
      </button></Link>
     

      <Link href={`${url}/cloud-computing`}></Link>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Cloud Computing
      </button>

      <Link href={`${url}/cyber-security`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Cybersecurity
        </button>
      </Link>
    

      <Link href={`${url}/ui/ux-design`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          UI/UX Design
        </button>
      </Link>
    

      <Link href={`${url}/artificial-intelligence`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Artificial Intelligence
        </button>
      </Link>
    

      <Link href={`${url}/block-chain development`}>
         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Blockchain Development
        </button>
      </Link>
     

      <Link href={`${url}/project-management`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Project Management
      </button>
      </Link>
      

      <Link href={`${url}/graphic-design`}>
         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Graphic Design
        </button>
      </Link>
     

      <Link href={`${url}/Business-analytics`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Business Analytics
        </button>
      </Link>
      
    </div>

    </div>
    
  );
};

export default CourseButtons;
