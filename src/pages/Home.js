import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Our Products
        </Link>
      </Hero>
    </>
  );
};

export default Home;
