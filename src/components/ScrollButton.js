import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../context/user-context';

const ScrollButton = () => {
  const { height } = useContext(UserContext);

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={height > 100 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'}
      onClick={scrollBackToTop}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ScrollButton;
