// src/pages/BookingPopup.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPopup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <button
          onClick={() => navigate(-1)}
          className="absolute text-xl text-gray-500 top-3 right-3 hover:text-black"
        >
          ×
        </button>

        <h3 className="mb-4 text-xl font-semibold text-center text-pink-700">Book an Appointment</h3>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="Packgae"
            placeholder="Choose Package"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-pink-600 rounded-md hover:bg-pink-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;