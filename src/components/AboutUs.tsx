import React from 'react';
import Card from './UiComp/ImageDisplay';

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 mx-auto mt-20 max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">Contact Us</h1>
      <div className="flex flex-col h-screen md:flex-row md:space-x-8">
        {/* Google Maps Embed */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg md:w-2/3 h-96 md:h-auto">
          <iframe
            title="SweetSteps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.459292565272!2d75.76712067514303!3d26.857145062476874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53962efcb8f%3A0xae986bdc5dc8e3ad!2sSweet%20Steps%20Impressions!5e0!3m2!1sen!2sin!4v1747110975885!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center w-full p-6 mt-6 bg-gray-100 rounded-lg shadow-lg md:w-1/3 md:mt-0">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="mb-2 text-gray-700">
            <strong>Email:</strong> <a href="mailto:sweetsteps05@gmail.com" className="text-purple-600 hover:underline">sweetsteps05@gmail.com</a>
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Phone 1:</strong> <a href="tel:+919413867088" className="text-purple-600 hover:underline">+91-9413867088</a>
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Phone 2:</strong> <a href="tel:+916378146202" className="text-purple-600 hover:underline">+91-6378146202</a>
          </p>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default AboutUs;
