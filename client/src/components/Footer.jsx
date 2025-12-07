import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-55 mb-5">
      <div className="border border-blue-200 bg-gray-700 p-7 rounded-xl">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 gap-14 text-sm">
          {/* ------ left Section ------ */}
          <div>
            <NavLink to={"/"} className="flex items-center gap-2">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-sm" />
                </div>
              </div>
              <h1 className="font-extrabold text-xl text-blue-600">
                JOB SEEKERS
              </h1>
            </NavLink>
            <p className="w-full md:w-2/3 text-white leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* ------ Center Section ------ */}
          <div>
            <p className="text-xl text-blue-600 font-medium mb-5">JOB FINDS</p>
            <ul className="flex flex-col gap-2 text-white">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          {/* ------ Right Section ------ */}
          <div>
            <p className="text-xl text-blue-600 font-medium mb-5">TEAM LEARNER</p>
            <ul className="flex flex-col gap-2 text-white">
              <li>MD Miraj Hossen</li>
              <li>mohammadsiam@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* ------ Copyright Text */}
        <div className="">
          <hr className="text-blue-500" />
          <p className="py-5 text-white text-sm text-center">
            Copyright © 2025 Team Learner - All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
