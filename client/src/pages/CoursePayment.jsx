import React from "react";
import PaymentCourse from "../components/PaymentCourse";

const CoursePayment = () => {
  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-bold mt-20 mb-2 text-center">
        Payment Gateway
      </h1>
      <PaymentCourse />
    </div>
  );
};

export default CoursePayment;
