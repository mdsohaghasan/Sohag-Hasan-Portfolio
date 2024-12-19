import React from 'react';

const Skill = () => {
  return (
    <div className="bg-gray-900 p-8">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">Skills & Experience</h1>
        </header>
        <div className="grid grid-cols-2 gap-8">
          <section id="skills" className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Programming Languages & Tools</h2>
            <div className="grid gap-4">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-400">HTML</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-400">CSS</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-400">JavaScript</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-400">React</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-400">Node.js</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </section>
          <section id="experience" className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-400">Frontend Developer</h3>
              <p className="text-gray-400">Company XYZ - Jan 2020 to Present</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
                <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                <li>Clients included small businesses, nonprofits, and large organizations</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-400">Web Developer Intern</h3>
              <p className="text-gray-400">Company ABC - Jun 2019 to Dec 2019</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Assisted senior developers in creating and maintaining web applications</li>
                <li>Participated in team meetings and contributed to project planning and design discussions</li>
                <li>Gained hands-on experience with various web development tools and technologies</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skill;
