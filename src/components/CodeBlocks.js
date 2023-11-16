import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const CodeBlock = ({ code, language }) => {
  return (
    <div className="code-block-container">
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>
  );
};

export default CodeBlock;