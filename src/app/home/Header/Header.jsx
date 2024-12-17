import React from 'react';

const Header = () => {
  return (
    <div>
      
        
      <section id="hero">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-6">Crafting Beautiful Web Experiences</h2>
          <p className="text-2xl mb-10">
            I'm Sohag, a frontend developer dedicated to building visually appealing and highly functional web applications.
          </p>
          <a href="#projects" className="inline-block bg-gray-700 text-white hover:text-gray-700 hover:bg-white py-4 px-8 rounded-full text-lg font-semibold transition duration-300">
            Explore My Projects
          </a>
        </div>
      </div>
      </section>
      
    </div>
  );
};

export default Header;
