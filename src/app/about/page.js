import React from 'react';
import Info from './Info/Info';
import Skill from './Skill/Skill';
import Hobby from './Hobby/Hobby';
import Gallery from './Gallery/Gallery';
import Dream from './Dream/Dream';

const About = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        </header>
         <Info /> 
         <Skill />
         <Hobby />
         <Dream/>
         <Gallery />

      </div>
    </div>
  );
};

export default About;
