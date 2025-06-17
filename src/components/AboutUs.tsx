import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="px-6 py-16 font-sans text-gray-800 bg-white">
      {/* Intro Section */}
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-pink-700 drop-shadow-sm">Our Story</h1>
        <p className="max-w-3xl mx-auto text-lg">
          At <span className="font-semibold text-pink-600">Sweet Steps</span>, we believe that some moments deserve to be paused in time. 
          Our handcrafted impressions preserve the warmth of love, the joy of new life, and the timeless bond of family — one mold at a time.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="flex flex-col items-center max-w-6xl gap-10 mx-auto mb-20 md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/src/assets/AboutUsImage.webp"
            alt="Sweet Steps family values"
            className="shadow-lg rounded-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-pink-600">Our Vision</h2>
          <p className="mb-4">
            Our goal is simple — to help families capture emotions that words can’t fully express. 
            Be it the tiny fingers of a newborn, the clasp of a couple's hands, or the blessing of an elder’s touch — each impression tells a story.
          </p>
          <p>
            We blend art with emotion, crafting keepsakes that become part of your family legacy. 
            With a heart-led team and safe, high-quality materials, we ensure every mold reflects love, care, and authenticity.
          </p>
        </div>
      </section>

      {/* Locations + Contact Info */}
      <section className="flex flex-col max-w-6xl mx-auto overflow-hidden bg-white shadow-lg rounded-xl md:flex-row">
        <div className="md:w-1/2 h-96 md:h-auto">
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
        <div className="p-6 bg-pink-100 md:w-1/2">
          <h3 className="mb-4 text-2xl font-semibold text-pink-700">Visit Us</h3>
          <p className="mb-2">📍 <strong>Studio Address:</strong> Sweet Steps Impressions, Jaipur</p>
          <p className="mb-2">📧 <strong>Email:</strong> <a href="mailto:sweetsteps05@gmail.com" className="text-purple-700 underline">sweetsteps05@gmail.com</a></p>
          <p className="mb-2">📞 <strong>Phone 1:</strong> <a href="tel:+919413867088" className="text-purple-700 underline">+91-9413867088</a></p>
          <p className="mb-2">📞 <strong>Phone 2:</strong> <a href="tel:+916378146202" className="text-purple-700 underline">+91-6378146202</a></p>
          <p className="mt-4 text-sm text-gray-700">
            Open for in-studio visits by appointment only. We also offer at-home sessions in select locations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
