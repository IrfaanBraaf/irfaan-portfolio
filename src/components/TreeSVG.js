/* eslint-disable */
import React from "react";

export default function TreeSVG() {
  return (
    <svg
      width="100%"
      height="600px"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {/* Main vertical timeline */}
      <line x1="200" y1="80" x2="200" y2="580" stroke="#9CAF88" strokeWidth="3" />

      {/* Start circle */}
      <circle cx="200" cy="70" r="12" fill="#5C4033" stroke="#9CAF88" strokeWidth="3" />

      {/* First arrow and date */}
      <text x="205" y="65" fontSize="12" fill="#5C4033" fontWeight="bold">
        2022
      </text>

      {/* Arrow pointing left to first card */}
      <line x1="200" y1="160" x2="100" y2="160" stroke="#9CAF88" strokeWidth="2" />
      <polygon points="100,160 110,155 110,165" fill="#9CAF88" />
      <text x="120" y="155" fontSize="11" fill="#7A8B6E" fontWeight="500">
        Jun 2022 – Aug 2022
      </text>

      {/* Second arrow pointing right to second card */}
      <line x1="200" y1="320" x2="300" y2="320" stroke="#9CAF88" strokeWidth="2" />
      <polygon points="300,320 290,315 290,325" fill="#9CAF88" />
      <text x="210" y="315" fontSize="11" fill="#7A8B6E" fontWeight="500">
        Sep 2022 – Present
      </text>
    </svg>
  );
}
