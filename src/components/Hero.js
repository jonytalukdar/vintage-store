import React from 'react';

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="banner">
        <h2>Think , Code and Deploy</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        {children}
      </div>
    </div>
  );
};

export default Hero;
