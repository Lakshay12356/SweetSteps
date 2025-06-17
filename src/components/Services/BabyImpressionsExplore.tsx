import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const BabyImpressionsExplore: React.FC = () => {
  const galleryImages = [
    { src: '/src/assets/1.webp', title: 'Classic Wooden Frame' },
    { src: '/src/assets/2.webp', title: 'Pastel Themed Keepsake' },
    { src: '/src/assets/3.webp', title: 'Modern Glass Finish' },
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center w-full min-h-screen px-6 text-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200"
        style={{
          backgroundImage: 'url(/src/assets/Logo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="max-w-4xl mb-4 text-5xl font-extrabold leading-tight text-pink-700 drop-shadow-lg">
          Forever Begins With Tiny Prints
        </h1>
        <p className="max-w-2xl mb-8 text-xl text-pink-700 drop-shadow-md">
          Our baby impressions capture the tiniest details of your newborn’s hands and feet — turning fleeting moments into timeless memories.
        </p>
        <a
          href="#booking"
          className="px-8 py-3 text-lg font-semibold text-pink-700 transition bg-white rounded-full shadow-lg hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Start Your Keepsake →
        </a>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 mx-auto max-w-7xl md:flex md:items-center md:gap-12">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">What Are Baby Impressions?</h2>
          <p className="mb-6 text-gray-700">
            We create 3D impressions using safe, non-toxic materials that capture the delicate details of your newborn’s hands and feet. These impressions become lifelong mementos, preserving precious moments forever.
          </p>
          <h3 className="mb-4 text-2xl font-semibold">How it Works</h3>
          <div className="flex items-center justify-between max-w-sm gap-6">
            {[
              { label: 'Book', src: 'https://assets7.lottiefiles.com/packages/lf20_4kx2q32n.json' },
              { label: 'Mould', src: 'https://assets7.lottiefiles.com/packages/lf20_5ngs2ksb.json' },
              { label: 'Frame', src: 'https://assets7.lottiefiles.com/packages/lf20_1pxqjqps.json' },
            ].map((step) => (
              <div key={step.label} className="flex flex-col items-center">
                <Player autoplay loop src={step.src} style={{ height: 80, width: 80 }} />
                <span className="mt-2 text-sm font-medium text-gray-800">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <video
            src="/src/assets/molding-process.mp4"
            autoPlay
            muted
            loop
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Design Showcase */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center">Design Showcase</h2>

        {/* Filters (without price range) */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300">
            <option>Frame Style</option>
            <option>Wooden</option>
            <option>Glass</option>
            <option>Pastel</option>
          </select>
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300">
            <option>Mold Type</option>
            <option>Single Hand</option>
            <option>Hand + Foot</option>
            <option>Twins</option>
          </select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={item.src}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                <p className="mb-2 font-semibold">{item.title}</p>
                <button className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-pink-700 rounded-full hover:bg-pink-800">
                  Order This Style
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="flex flex-col items-center justify-center w-full py-20 text-center text-white rounded-lg"
        style={{
          background: 'linear-gradient(135deg, #f9c5d1 0%, #f7e1d7 100%)',
        }}
      >
        <h2 className="mb-6 text-4xl font-bold drop-shadow-lg">
          Every baby grows fast — their tiny prints deserve to last.
        </h2>
        <a
          href="#booking"
          className="px-10 py-4 text-xl font-semibold text-pink-700 transition bg-white rounded-full shadow-lg hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Book Your Baby’s Print Now
        </a>
      </section>
    </div>
  );
};

export default BabyImpressionsExplore;