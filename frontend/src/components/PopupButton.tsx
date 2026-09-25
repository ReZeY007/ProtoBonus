import React, { useState } from "react";
import "./PopupButton.css";

interface PopupProps {
  children: React.ReactElement;
  buttonContent: string | React.ReactElement;
}

function Popup({ children, buttonContent }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleButtonClick}>{buttonContent}</button>
      <div className={`popup ${isOpen && "popup--open"}`}>{children}</div>
    </>
  );
}

export default Popup;
