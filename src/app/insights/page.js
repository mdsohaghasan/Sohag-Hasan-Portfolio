import React from 'react';

const insights = () => {
  return (
    <div className="w-full bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Insights</h1>
        <div className="space-y-6">

          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">Events</h2>
            <p className="text-gray-400">Stay updated with the latest events in the tech world.</p>
          </section>

          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">Activity</h2>
            <p className="text-gray-400">Explore various activities and workshops to enhance your skills.</p>
          </section>

          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">Resource</h2>
            <p className="text-gray-400">Access a wide range of resources to support your learning journey.</p>
          </section>

          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white">Tech Think & Discussion</h2>
            <p className="text-gray-400">Join discussions and think tanks to share and gain knowledge.</p>
          </section>

          <section className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white mb-4">Tech News</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Latest Tech Trends in 2023</h3>
                <p className="text-gray-400">Discover the emerging technologies that are set to shape the future.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-400">Read more</a>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">AI and Machine Learning Breakthroughs</h3>
                <p className="text-gray-400">Explore the latest advancements in AI and machine learning.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-400">Read more</a>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Cybersecurity Updates</h3>
                <p className="text-gray-400">Stay updated with the latest news in cybersecurity.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-400">Read more</a>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default insights;
