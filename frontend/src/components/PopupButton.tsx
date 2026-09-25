import React, { useState } from "react";
import "./PopupButton.css";

interface PopupProps {
  children: React.ReactElement;
  buttonContent: string | React.ReactElement;
  className?: string;
}

function Popup({ children, buttonContent, className }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={className + " popup-button"}
        onClick={handleButtonClick}
      >
        {buttonContent}
        <div className={`popup ${isOpen && "popup--open"}`}>{children}</div>
      </button>
    </>
  );
}

export default Popup;
