import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  const hoverClass = hover ? 'hover:shadow-md' : '';

  return (
    <div className={`bg-white rounded-lg shadow-sm transition-shadow ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;