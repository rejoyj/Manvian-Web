import React from 'react';
import './SpeechBubbleCard.css';

const SpeechBubbleCard = ({ text = "Our Vision" }) => {
  return (
    <div className="speech-bubble">
      {text}
    </div>
  );
};

export default SpeechBubbleCard;
