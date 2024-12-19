import React from 'react';

const Dream = () => {
  return (
    <div className="w-full bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Dream</h1>
      <div className="p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-4">Web Development Portfolio</h2>
        <p className="text-gray-400 mb-4">
          As a passionate web developer, I have worked on numerous projects that showcase my skills and creativity. Here are some of my favorite projects:
        </p>
        <ul className="list-disc list-inside text-gray-400">
          <li className="mb-2">
            <strong className="text-white">Personal Portfolio:</strong> A responsive and visually appealing personal portfolio website to showcase my work and skills. Built with React and Tailwind CSS.
          </li>
          <li className="mb-2">
            <strong className="text-white">E-commerce Platform:</strong> An e-commerce platform with a user-friendly interface and secure payment gateway. Developed using Next.js and Tailwind CSS.
          </li>
          <li>
            <strong className="text-white">Blogging Website:</strong> A modern and clean blogging website with features like user authentication and content management. Created with Gatsby and Tailwind CSS.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dream;