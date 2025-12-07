import React, { useContext } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Courses = () => {
  const navigate = useNavigate();
  const { courses } = useContext(AppContext);

  return (
    <div>
      <section className="text-center py-11 px-6 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
          Find Your Courses or Perfect Materials
        </h1>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Course title or keyword"
            className="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-gray-800 cursor-pointer text-white px-4 rounded-r-lg flex items-center">
            <Search className="h-5 w-5 mr-1" /> Find Course
          </button>
        </div>
      </section>

      <div>
        <h2 className="text-4xl font-semibold text-gray-700 mt-10">Upcoming & Ongoing Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-15">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-100 p-4 rounded-lg shadow hover:bg-blue-100 hover:shadow-lg transition duration-200 overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg h-40 object-cover"
              />
              <div className="mt-5">
                <span className="text text-indigo-600 font-medium">
                  {course.category}
                </span>
                <h2 className="text-lg font-semibold mt-2">{course.title}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  {course.description}
                </p>
                <p className="text-gray-900 mt-2">Course Fee ৳{course.price}</p>
                <button
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="mt-4 px-4 py-2 cursor-pointer bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
