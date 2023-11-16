import React from 'react';
import RenderCode from './RenderCode'
import TwoCells from './TwoCells'

const VerticalStackComponent = ({ code, title, text }) => {
  return (
    <div className="vertical-stack-container">
      <div className="cell top-cell">

        <RenderCode code={code} />
      </div>
      <div className="cell bottom-cell">

        <TwoCells title={title} text={text} code={code} />
      </div>
    </div>
  );
};

export default VerticalStackComponent;