import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";


export default function PaymentCourse() {
  const { courses, paymentMethods } = useContext(AppContext);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [course, setCourse] = useState({})
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();


  // Handle Payment
  function handlePay() {
    if (!selectedMethod || !phone || !amount) {
      toast.error("Please select a method and fill all fields");
      return;
    }
    toast.success(`Payment Successful ! ${selectedMethod.name}\nAmount: ${amount}, Phone: ${phone}`)

  }

  useEffect(() => {
    setLoading(true);
    const selectedCourse = courses.filter(c => c.id === id);
    setCourse(selectedCourse[0]);
    setAmount(course.price);
    setLoading(false);

  }, [courses, id, course])



  if (loading) {
    
    return (
        <div className="mt-10 text-center">
            loading..
        </div>
    )
  }

  return (
    (!loading) &&

    <div className="max-w-5xl mx-auto border border-blue-200 bg-white shadow rounded-2xl p-9 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Course Details */}
      <div className="pr-6 md:border-r border-r-blue-300">
        <div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full border-2 rounded-lg border-blue-500 h-40 object-cover"
            />
        </div>
        <h1 className="text-2xl font-bold my-4 text-gray-800">
          {course.title}
        </h1>
        <p className="text-gray-600 mb-4">
          {course.description}
        </p>

        <ul className="list-disc ml-6 mb-4 text-gray-700">
           {
            course.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))
           }
        </ul>

        <div className="text-lg font-semibold text-gray-800">
            <span>Course fee </span>
            <span className="text-2xl font-bold text-blue-600">{'৳'}{course.price}</span>
        </div>
      </div>

      {/* Right: Payment Gateway */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Complete Your Payment
        </h2>

        {/* Payment Methods */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method)}
              className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                selectedMethod?.id === method.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              <img src={method.logo} alt={method.name} className="h-10 mb-2" />
              <span className="font-medium">{method.name}</span>
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="01XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-blue-500 rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              disabled
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-blue-500 rounded focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePay}
          className="mt-6 w-full bg-blue-600 text-white py-3 cursor-pointer rounded hover:bg-blue-700 transition font-medium"
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
}
