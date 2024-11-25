import React, { useState } from "react";

const Ticket = ({ onClick, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
  };

  return (
    <button
      className={`ticket-button ${isClicked ? "ripped" : ""}`}
      onClick={handleClick}
      disabled={isClicked} // Disable the button once clicked
    >
      {children || "Ticket"}
    </button>
  );
};

export default Ticket;
