import React from "react";

export const TimeIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1148_34759)">
        <path d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z" stroke="#A7ACAC" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 6.3335V10.5002L12.5 13.0002" stroke="#A7ACAC" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1148_34759">
          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
