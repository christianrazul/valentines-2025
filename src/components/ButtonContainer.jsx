import React, { useState } from 'react';
import './ButtonContainerStyles.css'

const SuccessScreen = () => {
  return (
    <div className="screen-container">
      <div className="container">
      <div className="container">
        <div className="image-container">
            <img src="../happyCat.gif" alt="" srcset="" />
        </div>
        <div className="text">
            <h1>Yaaaay!</h1>
            <h3>Friday, 6PM be ready</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

const ButtonContainer = () => {
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleNoClick = () => {
    const newClickCount = noButtonClicks + 1;
    setNoButtonClicks(newClickCount);

    // Random position calculation
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 40);

    // Calculate new scales
    const noScale = 1 - (newClickCount * 0.15);
    const yesScale = 1 + (newClickCount * 0.15);

    setYesButtonScale(yesScale);
    
    setNoButtonStyle({
      position: 'fixed',
      left: `${randomX}px`,
      top: `${randomY}px`,
      transform: `scale(${noScale})`,
      opacity: newClickCount >= 5 ? 0 : 1,
      pointerEvents: newClickCount >= 5 ? 'none' : 'auto'
    });
  };

  const handleYesClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowSuccess(true);
    }, 500); // Match this with CSS transition duration
  };

  if (showSuccess) {
    return <SuccessScreen />;
  }

  return (
    <div className="screen-container">
      <div className={`container ${isExiting ? 'fade-exit fade-exit-active' : ''}`}>
        <div className="image-container">
          <img className='img' src="../cryingHamster.png" alt="none" />
        </div>
        <div className="text">
          <h1>Will you be my valentine?</h1>
        </div>
        <div className="button-container">
          <button 
            className="button yes-button" 
            onClick={handleYesClick}
            style={{ transform: `scale(${yesButtonScale})` }}
          >
            Yes
          </button>
          <button 
            className="button no-button" 
            onClick={handleNoClick}
            style={noButtonStyle}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;