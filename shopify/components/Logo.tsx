import React from "react";

export const Logo: React.FC<{ className?: string }> = ({
  className = "w-10 h-10",
}) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Cyan Crescent Shape */}
    <path
      d="M12 20C12 13.3726 17.3726 8 24 8C20 8 12 12 12 20C12 28 20 32 24 32C17.3726 32 12 26.6274 12 20Z"
      fill="#22D3EE"
    />
    {/* Yellow Circle Shape */}
    <circle cx="26" cy="20" r="8" fill="#FACC15" />
  </svg>
);
