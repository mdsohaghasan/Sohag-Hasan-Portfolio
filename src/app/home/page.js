import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Action from './Action/Action';
import Service from './Service/Service';
import Portfolio from './Portfolio/Portfolio';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Header /> 
      <About />
      <Service />
      <Portfolio />
      <Action />
      <Testimonial />
      
    </div>
  );
};

export default Home;


