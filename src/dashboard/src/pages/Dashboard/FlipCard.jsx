
import React, { useEffect, useState } from 'react';

const FlipCard = ({ isFlipped, children }) => {
  const [flipState, setFlipState] = useState(isFlipped);

  useEffect(() => {
    setFlipState(isFlipped);
  }, [isFlipped]);

  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${flipState ? 'flipped' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default FlipCard;
