import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p>
            Hi, I'm Sohag, a passionate web developer with expertise in creating dynamic and responsive web applications. Explore my projects and get in touch to learn more about my work.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: sohag@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: City, Country</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Sohag's Web Developer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
