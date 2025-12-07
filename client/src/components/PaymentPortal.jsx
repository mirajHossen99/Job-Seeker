import React, { useState } from "react";

const PaymentPortal = ({course}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  
  const paymentMethods = [
    { id: 1, name: "Bkash", logo: "https://freelogopng.com/images/all_img/1656235223bkash-logo.png" },
    { id: 2, name: "Nagad", logo: "https://ps.w.org/nagad-payment-gateway/assets/icon-256x256.png" },
    { id: 3, name: "Rocket", logo: "https://www.cashoutcharge.com/static/media/rocket.f1829105.png" },
  ];

  // Handle Demo Payment
  function handlePay() {
    if (!selectedMethod || !phone || !amount) {
      alert("⚠ Please select a method and fill all fields");
      return;
    }

    setTimeout(() => {
      alert(
        `✅ Demo Payment Successful!\n\nMethod: ${selectedMethod.name}\nAmount: ${amount}\nPhone: ${phone}`
      );
    }, 1000);
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Payment Gateway
      </h1>

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
            <img
              src={method.logo}
              alt={method.name}
              className="h-10 mb-2"
            />
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
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          />
        </div>
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePay}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Pay Now (Demo)
      </button>
    </div>
  );
}


export default PaymentPortal;