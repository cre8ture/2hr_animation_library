import React, { useState } from 'react';
import Text from './Text';
import CodeBlock from './CodeBlocks';

const TwoCellComponent = ({title, text, code}) => {
  const [isRightCellShown, setIsRightCellShown] = useState(false);

  return (
    <div className="two-cell-container">
      <div className="cell left-cell">
        <Text
          title={title}
          text={text}
          isRightCellShown={isRightCellShown}
          setIsRightCellShown={setIsRightCellShown}
        />
      </div>
      <div className={`cell right-cell ${isRightCellShown ? 'visible' : 'hidden'}`}>
  <CodeBlock code={code} language="javascript" />
</div>

    </div>
  );
};

export default TwoCellComponent;