import React from 'react';

const Text = ({ title, text, isRightCellShown, setIsRightCellShown }) => {

  console.log("title", title)
  return (
    <div className="text-container">
      <h1 className="text-title">{title}</h1>
      <p className="text-display">{text}</p>
      <button
        className="show-code-button"
        onClick={() => setIsRightCellShown(!isRightCellShown)}
      >
        {isRightCellShown ? 'Hide Code' : 'Show Code'}
      </button>
    </div>
  );
};

export default Text;