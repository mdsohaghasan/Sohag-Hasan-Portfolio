import React from 'react';

const blog = () => {
  return (
    <div>
        
      <section className="w-full bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-8">Blog Archive</h1>
          <div className="space-y-6">
            <article className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-white">Blog Post Title 1</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-400">Read more</a>
            </article>
            <article className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-white">Blog Post Title 2</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-400">Read more</a>
            </article>
            <article className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-white">Blog Post Title 3</h2>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              <a href="#" className="text-indigo-500 hover:text-indigo-400">Read more</a>
            </article>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default blog;


