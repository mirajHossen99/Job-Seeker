import React from 'react';
import { CheckCircleIcon, Search } from "lucide-react";
import SearchJob from '../components/SearchJob';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
              
              <SearchJob />
        
              <section className="py-16 px-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                  Why Choose <span className="text-blue-600">Job Seekers</span>
                </h2>
        
                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mx-auto">
                  {/* Card 1 */}
                  <div className="bg-white shadow-md rounded p-6 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Job Opportunities</h3>
                    <p className="mt-5 text-gray-600 text-sm">
                      Access thousands of job listings across various industries and experience levels.
                    </p>
                    <ul className="mt-6 text-sm text-gray-700 space-y-1">
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>100,000+ active job listings</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>50+ job categories</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Remote and on-site options</span></li>
                    </ul>
                    <button onClick={() => {navigate('/find-jobs'), scrollTo(0,0)}} className="mt-6 w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-2 rounded">Explore Jobs</button>
                  </div>
        
                  {/* Card 2 */}
                  <div className="bg-white shadow-md rounded p-6 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Top Companies</h3>
                    <p className="mt-5 text-gray-600 text-sm">
                      Connect with leading companies, from innovative startups to Fortune corporations.
                    </p>
                    <ul className="mt-6 text-sm text-gray-700 space-y-1">
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>500+ verified employers</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Exclusive partnerships</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Direct application process</span></li>
                    </ul>
                    <button className="mt-6 w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-2 rounded">View Companies</button>
                  </div>
        
                  {/* Card 3 */}
                  <div className="bg-white shadow-md rounded p-6 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Talent Pool</h3>
                    <p className="mt-5 text-gray-600 text-sm">
                      Employers can access a diverse pool of qualified candidates for their open positions.
                    </p>
                    <ul className="mt-6 text-sm text-gray-700 space-y-1">
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>1M+ registered job seekers</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Advanced search filters</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>AI-powered matching</span></li>
                    </ul>
                    <button className="mt-6 w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-2 rounded">Post a Job</button>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white shadow-md rounded p-6 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">Enroll Courses</h3>
                    <p className="mt-5 text-gray-600 text-sm">
                      Employers can access a diverse pool of qualified candidates for their open positions.
                    </p>
                    <ul className="mt-6 text-sm text-gray-700 space-y-1">
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>1M+ registered job courses</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Advanced search filters</span></li>
                      <li className='flex items-center'><CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>AI-powered matching</span></li>
                    </ul>
                    <button onClick={() => {navigate('/courses'), scrollTo(0,0)}} className="mt-6 w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-2 rounded">Enroll Course</button>
                  </div>
                </div>
        
                {/* Trusted by */}
                <div className="mt-10 text-center">
                  <span className="px-4 py-2 border rounded-full text-sm text-gray-600">
                    Trusted by 10,000+ companies worldwide
                  </span>
                </div>
              </section>
        
              {/* CTA Section */}
              <section className="py-16 px-6 bg-[#d7dedc] text-center">
                <h2 className="text-xl font-semibold text-gray-800">Ready to Get Started?</h2>
                <div className="mt-6 flex justify-center gap-4">
                  <button onClick={() => {navigate('/find-jobs'), scrollTo(0,0)}} className="bg-gray-900 hover:bg-gray-800 cursor-pointer text-white px-6 py-2 rounded transition-all duration-200">Find Jobs</button>
                  <button className="bg-white hover:bg-gray-100 cursor-pointer px-6 py-2 rounded">Post a Job</button>
                </div>
              </section>
        
            </div>
    );
};

export default Home;