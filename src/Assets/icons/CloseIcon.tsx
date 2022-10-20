import React from 'react';

export const CloseIcon = ({ width = '20', height = '21', fill = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.454102 17.9248L8.93938 9.43952L17.4247 0.954242L19.546 3.07556L2.57542 20.0461L0.454102 17.9248Z"
        fill="white"
      />
      <path
        d="M2.57544 0.954102L11.0607 9.43938L19.546 17.9247L17.4247 20.046L0.454119 3.07542L2.57544 0.954102Z"
        fill={fill}
      />
    </svg>
  );
};
