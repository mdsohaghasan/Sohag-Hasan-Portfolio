import React from 'react';

const Hobby = () => {
  return (
    <div className="w-full bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Hobby</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <section className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4">Project 1</h2>
          <p className="text-gray-400">Description of Web Development Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <section className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4">Project 2</h2>
          <p className="text-gray-400">Description of Web Development Project 2. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </section>
        <section className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4">Project 3</h2>
          <p className="text-gray-400">Description of Web Development Project 3. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
        </section>
        <section className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white mb-4">Project 4</h2>
          <p className="text-gray-400">Description of Web Development Project 4. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
        </section>
      </div>
    </div>
  );
};

export default Hobby;