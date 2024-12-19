import React from 'react';

const Info = () => {
  return (
    <div className="bg-gray-900 p-8">
      <div className="container mx-auto">
        <section id="about-content" className="bg-gray-800 p-6 rounded-lg shadow-md grid grid-cols-1 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Personal Profile</h2>
            <p className="text-gray-400 mb-4">
              Hi, I'm Abdou, a dedicated web developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver high-quality and user-friendly web solutions.
            </p>
            <p className="text-gray-400 mb-4">
              My journey in web development started with a curiosity for how websites work and a desire to build my own. Over the years, I have honed my skills in HTML, CSS, JavaScript, and various frameworks and libraries. I am constantly learning and keeping up with the latest trends and technologies in the web development world.
            </p>
            <p className="text-gray-400 mb-4">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community. I believe in the power of collaboration and continuous learning to drive innovation and create impactful web experiences.
            </p>
            <a href="#projects" className="btn-primary text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">View My Work</a>
          </div>
        </section>
        <section id="general-info" className="bg-gray-800 p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">General Information</h2>
            <p className="text-gray-400 mb-4">
              I am a web developer with a strong focus on creating efficient and scalable web applications. My expertise lies in both front-end and back-end development, allowing me to build comprehensive solutions.
            </p>
          </div>
          <div>
            <p className="text-gray-400 mb-4">
              I am committed to continuous learning and staying updated with the latest industry trends. My goal is to leverage my skills to contribute to innovative projects and collaborate with like-minded professionals.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
