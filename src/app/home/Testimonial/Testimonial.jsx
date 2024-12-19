import React from 'react';

const Testimonial = () => {
  return (
    <div className="w-full bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Testimonials</h1>
        <div className="space-y-6">
          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">John Doe</h2>
            <p className="text-gray-400">"The web development services provided were exceptional. The team was professional and delivered a high-quality website that exceeded our expectations."</p>
          </section>
          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">Jane Smith</h2>
            <p className="text-gray-400">"I am extremely satisfied with the UI/UX design services. The user interface is intuitive and has significantly improved the user experience for our customers."</p>
          </section>
          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">Michael Johnson</h2>
            <p className="text-gray-400">"The e-commerce solutions provided have helped us increase our online sales tremendously. The team was knowledgeable and provided excellent support throughout the process."</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;