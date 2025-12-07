import React from "react";
import Navbar from "./components/Navber";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import Courses from "./pages/Courses";
import CoursePayment from "./pages/CoursePayment";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-4 sm:mx-[10%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<CoursePayment />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
