import React from 'react';

export const BurgerIcon = ({ width = '24', height = '18', fill = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H24V3H0V0ZM0 7.5H24V10.5H0V7.5ZM0 15H24V18H0V15Z"
        fill={fill}
      />
    </svg>
  );
};
