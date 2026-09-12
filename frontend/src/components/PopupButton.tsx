import React from "react";

interface PopupProps {
  children: React.ReactElement;
  buttonContent: string | React.ReactElement;
}

function Popup({ children, buttonContent }: PopupProps) {
  return (
    <>
      <button>{buttonContent}</button>
      <div>{children}</div>
    </>
  );
}

export default Popup;
