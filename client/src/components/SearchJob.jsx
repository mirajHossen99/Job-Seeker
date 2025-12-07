import React from "react";
import { CheckCircleIcon, Search } from "lucide-react";

const SearchJob = () => {
  return (
    <section className="text-center py-11 px-6 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
        Find Your Dream Job or Perfect Candidate
      </h1>
      
      {/* Search Bar */}
      <div className="mt-8 flex justify-center max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Job title or keyword"
          className="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-gray-800 cursor-pointer text-white px-4 rounded-r-lg flex items-center">
          <Search className="h-5 w-5 mr-1" /> Find Jobs
        </button>
      </div>
    </section>
  );
};

export default SearchJob;
