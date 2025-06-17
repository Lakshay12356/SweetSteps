import React from 'react';

const icons = {
  hand: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V5a2 2 0 1 1 4 0v6m0 0V4a2 2 0 1 1 4 0v7m0 0v-2a2 2 0 1 1 4 0v4a8 8 0 0 1-8 8H7a4 4 0 0 1-4-4v-3a2 2 0 1 1 4 0" />
    </svg>
  ),
  photo: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4a3 3 0 0 1 4 0l4 4M4 8h.01M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H4z" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 0 0-5-4M9 20H4v-1a4 4 0 0 1 5-4m4-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6-4a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    </svg>
  ),
  gift: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m16 0H4m16 0V8a2 2 0 0 0-2-2h-3.5M4 12V8a2 2 0 0 1 2-2h3.5m0 0A2.5 2.5 0 1 0 8 4c0 1.5 1.5 3 3 4zm5.5-2a2.5 2.5 0 0 0-2.5 2c1.5-1 3-2.5 3-4 0-1.5-1.5-2.5-3-2.5z" />
    </svg>
  ),
};

const services = [
  {
    title: 'Lifelike Castings',
    description: 'We preserve the tiniest details of your loved ones’ hands and feet in 3D.',
    icon: icons.hand,
  },
  {
    title: 'Personalized Frames',
    description: 'Each creation is framed with names, dates, and custom touches for lifelong memories.',
    icon: icons.photo,
  },
  {
    title: 'Couple & Family Impressions',
    description: 'We capture the bond between couples, parents, siblings, and generations in timeless impressions.',
    icon: icons.users,
  },
  {
    title: 'Creative Gifting',
    description: 'Our handcrafted impressions make meaningful gifts for birthdays, anniversaries, and milestones.',
    icon: icons.gift,
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-16 text-gray-800 bg-white">
      <div data-aos="fade-up" data-aos-delay="150" className="max-w-6xl px-6 mx-auto text-center">
        <h2 className="mb-12 text-4xl font-extrabold">What We Do</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 transform bg-white shadow-md rounded-3xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
