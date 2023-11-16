import React from 'react';
import { useInView } from 'react-intersection-observer';

const GridItem = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`grid-item ${inView ? 'fade-in' : ''}`}
    >
      {children}
    </div>
  );
};

const GridComponent = ({ children }) => {
  return (
    <div className="grid-container">
      {React.Children.map(children, (child, i) => (
        <GridItem key={i}>
          {child}
        </GridItem>
      ))}
    </div>
  );
};

export default GridComponent;