"use client"
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
const url = "http://localhost:3000/courses"

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [courses, setCourses] = useState([]); //store courses from api
  const [dropdowns, setDropdowns] = useState({});
  const [navItems, setNavItems] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Fetch main nav items
  useEffect(() => {
    fetch("/api/navigation")
      .then((res) => res.json())
      .then((data) => setNavItems(data));
  }, []);

  //Fetch Api data
  useEffect(()=>{
    const fetchCourses = async ()=>{
      try{
        const res = await fetch(url);
        const data = await res.json();
        setCourses(data);
      }catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

// fetch navbar items
   useEffect(() => {
    const fetchNav = async () => {
      try {
        const res = await fetch("http://localhost:3000/navigation");
        const data = await res.json();
        setNavItems(data);
      } catch (error) {
        console.error("Error fetching navigation:", error);
      }
    };
    fetchNav();
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsCoursesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

    // Fetch dropdown when hovered
  const fetchDropdown = async (name) => {
    if (!dropdowns[name]) {
      try {
        const res = await fetch(`/api/navigation/${name}`);
        if (res.ok) {
          const data = await res.json();
          setDropdowns((prev) => ({ ...prev, [name]: data }));
        }
      } catch (err) {
        console.error("Error loading dropdown:", err);
      }
    }
    setActiveDropdown(name);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-3 shadow relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-orange-600">Teks</span>
        <span className="text-2xl font-bold text-blue-700">academy</span>
        <span className="ml-3 text-sm font-semibold text-blue-700">
          14 <span className="text-gray-500">Years</span> Excellence
        </span>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6">
        <a href="#" className="text-orange-600 font-semibold text-white">
          Home
        </a>

        {/* Courses Toggle */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            className="flex items-center space-x-1 text-gray-800 hover:text-orange-600 focus:outline-none"
          >
            <span className="text-white">Courses</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isCoursesOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {/* Mega Menu */}
          {isCoursesOpen && (
            <div
              ref={menuRef}
              className="absolute left-0 top-full w-[800px] bg-white shadow-lg rounded-lg mt-2 p-6 z-50 flex-wrap gap-4 flex"
            >
              {courses.map((course, index)=>(
                <Link key={index} href={`${url}/${course.name}`}>
                  <div className="w-[48%] flex items-start space-x-3 p-4 rounded-lg shadow hover:shadow-md transition">
                    <img
                      src={course.icon || "https://img.icons8.com/ios-filled/50/course.png"}
                      className="w-10 h-10"
                      alt={course.title}
                    />
                    <div>
                      <h3 className="font-semibold text-blue-900">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))

              }
           
             

              {/* Know More */}
              <div className="w-full text-center mt-4">
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Know more
                </a>
              </div>
            </div>
          )}
        </div>

        <a href="#" className="text-white hover:text-orange-600">
          Branches
        </a>
        <a href="#" className="text-white hover:text-orange-600">
          Success Stories
        </a>
        <a href="#" className="text-white hover:text-orange-600">
          Resources
        </a>
        <a href="#" className="text-white hover:text-orange-600">
          Discover
        </a>

        {/* Button */}
        <a
          href="#"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Apply for Jobs
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
