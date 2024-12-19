import React from 'react';

const Service = () => {
  return (
    <div className="w-full bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Our Services</h1>
        <div className="space-y-6">
          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">Web Development</h2>
            <p className="text-gray-400">We offer top-notch web development services to build responsive and high-performing websites.</p>
          </section>
          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">UI/UX Design</h2>
            <p className="text-gray-400">Our design team creates intuitive and engaging user interfaces to enhance user experience.</p>
          </section>
          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">E-commerce Solutions</h2>
            <p className="text-gray-400">We provide comprehensive e-commerce solutions to help you sell your products online effectively.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Service;

