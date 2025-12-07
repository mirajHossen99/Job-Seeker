import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    
    // const [token, setToken] = useState(false)
    const navigate = useNavigate()
    const {token, setToken} = useContext(AppContext);

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');

    }
    return (
      <div className="sticky top-0 z-50 shadow bg-gray-100">
        <div className="mx-4 sm:mx-[10%] ">
          <div className=" flex items-center justify-between text-sm py-6 mb-6">
            <NavLink to={"/"} className="flex items-center gap-2">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm" />
                </div>
              </div>
              <h1 className="font-extrabold text-2xl text-blue-600">
                JOB SEEKERS
              </h1>
            </NavLink>

            <ul className="md:flex items-start gap-5 font-medium">
              <NavLink to="/">
                <li className="py-1">HOME</li>
                <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
              </NavLink>
              <NavLink to="/find-jobs">
                <li className="py-1">FIND JOBS</li>
                <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
              </NavLink>
              <NavLink to="/my-jobs">
                <li className="py-1">MY JOBS</li>
                <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
              </NavLink>
              <NavLink to="/courses">
                <li className="py-1">COURSES</li>
                <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
              </NavLink>
              <NavLink to="/about">
                <li className="py-1">ABOUT</li>
                <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
              </NavLink>
              
            </ul>
            <div className="flex items-center gap-4">
              {token ? (
                <div className="flex items-center gap-2 cursor-pointer group relative">
                  <img
                    className="w-8 rounded-full"
                    src={assets.profile_pic}
                    alt="profile-picture"
                    srcset=""
                  />
                  <img
                    className="w-2.5"
                    src={assets.dropdown_icon}
                    alt="dropdown-icon"
                  />

                  <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block ">
                    <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-4">
                      <p
                        onClick={() => navigate("my-profile")}
                        className="hover:text-gray-800 cursor-pointer"
                      >
                        My Profile
                      </p>
                      <p
                        onClick={() => navigate("my-appointments")}
                        className="hover:text-gray-800 cursor-pointer"
                      >
                        My Appointments
                      </p>
                      <p
                        onClick={logout}
                        className="hover:text-gray-800 cursor-pointer"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-blue-600 text-white text-sm font-semibold px-8 py-3 rounded-full hidden md:block"
                >
                  Create accout
                </button>
              )}
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar