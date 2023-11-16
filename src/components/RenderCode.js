import React from 'react';

const IframeComponent = ({ code, height='400px' }) => {
  return (
    <iframe
      srcDoc={code}
      height={height}
      width="100%"
      style={{
        border: 'none',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px'
      }}
    />
  );
};

export default IframeComponent;
