import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 p-8">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </header>
        <section id="about-content" className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Web Development Team</h2>
          <p className="text-gray-400 mb-4">
            Welcome to our web development team! We are a group of passionate developers dedicated to creating dynamic and responsive web applications. Our team has a strong foundation in both front-end and back-end technologies, and we strive to deliver high-quality and user-friendly web solutions.
          </p>
          <p className="text-gray-400 mb-4">
            Our journey in web development started with a curiosity for how websites work and a desire to build our own. Over the years, we have honed our skills in HTML, CSS, JavaScript, and various frameworks and libraries. We are constantly learning and keeping up with the latest trends and technologies in the web development world.
          </p>
          <p className="text-gray-400 mb-4">
            When we're not coding, we enjoy exploring new technologies, contributing to open-source projects, and sharing our knowledge with the developer community. We believe in the power of collaboration and continuous learning to drive innovation and create impactful web experiences.
          </p>
          <a href="#projects" className="btn-primary text-white bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded">View Our Work</a>
          <a href="/resume.pdf" className="btn-secondary text-white bg-green-600 hover:bg-green-800 py-2 px-4 rounded ml-4" download>Download Resume</a>
        </section>
      </div>
    </div>
  );
};

export default About;



