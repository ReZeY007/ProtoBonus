import React from "react";

interface PopupProps {
  children: React.ReactElement;
}

function Popup({ children }: PopupProps) {
  return <div>{children}</div>;
}

export default Popup;
