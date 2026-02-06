import React, { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful ✅");
  };

  return (
    <div className="min-h-screen bg-gradient from-indigo-500 via-purple-500 to-pink-500 px-4 py-10 flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Secure Payment
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Order Summary */}
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Product</span>
              <span>₹999</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>GST (18%)</span>
              <span>₹180</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-semibold text-gray-800 text-lg">
              <span>Total</span>
              <span>₹1,179</span>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              🔒 All transactions are secured and encrypted.
            </p>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Payment Method */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Payment Method
              </h2>

              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  <span>Card</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                  />
                  <span>UPI</span>
                </label>
              </div>
            </div>

            {/* Card Fields */}
            {paymentMethod === "card" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                    className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      required
                      className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="password"
                      placeholder="***"
                      required
                      className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                </div>
              </>
            )}

            {/* UPI Fields */}
            {paymentMethod === "upi" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  UPI ID
                </label>
                <input
                  type="text"
                  placeholder="example@upi"
                  required
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            )}

            {/* Pay Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Pay Now
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Payment;
