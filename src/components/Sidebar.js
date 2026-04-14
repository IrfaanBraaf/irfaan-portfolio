/* eslint-disable */
import React from "react";
import profileImg from "../images/profile.jpeg";

export default function Sidebar({ activePage, onNavigate }) {
  const menuItems = ["About Me", "Experience", "Skills", "Projects"];

  // Terminal‑inspired colors
  const terminalGreen = "#33ff33";
  const terminalDark = "#0c0c0c";
  const terminalGray = "#1a1a1a";
  const terminalBorder = "#2a2a2a";

  return (
    <div
      style={{
        width: "280px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: terminalDark,
        color: terminalGreen,
        padding: "28px 20px",
        boxSizing: "border-box",
        borderRight: `1px solid ${terminalBorder}`,
        fontFamily: "'Courier New', Courier, monospace",
        overflowY: "auto",
      }}
    >
      {/* Profile image */}
      <div style={{ marginBottom: "24px", textAlign: "center" }}>
        <img
          src={profileImg}
          alt="Profile"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
            border: `2px solid ${terminalGreen}`,
            boxShadow: `0 0 15px ${terminalGreen}40`,
          }}
        />
      </div>

      {/* Name and title */}
      <div style={{ marginBottom: "36px", textAlign: "center" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: "bold",
            color: terminalGreen,
            letterSpacing: "1px",
          }}
        >
          Irfaan Braaf
        </h2>
        <h3
          style={{
            margin: "8px 0 0 0",
            fontSize: "13px",
            fontWeight: "normal",
            color: "#bbffbb",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          $ Software Developer _
        </h3>
      </div>

      {/* Navigation menu */}
      <div>
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => onNavigate(item)}
            style={{
              margin: "12px 0",
              padding: "12px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              color: activePage === item ? terminalDark : terminalGreen,
              background: activePage === item ? terminalGreen : "transparent",
              border: `1px solid ${activePage === item ? terminalGreen : terminalBorder}`,
              transition: "all 0.2s ease",
              fontFamily: "inherit",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              if (activePage !== item) {
                e.currentTarget.style.background = "#1a3a1a";
                e.currentTarget.style.borderColor = terminalGreen;
              }
            }}
            onMouseLeave={(e) => {
              if (activePage !== item) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = terminalBorder;
              }
            }}
          >
            {`> ${item}`}
          </div>
        ))}
      </div>

      {/* Status line */}
      <div
        style={{
          marginTop: "40px",
          fontSize: "12px",
          color: "#2a5a2a",
          borderTop: `1px solid ${terminalBorder}`,
          paddingTop: "16px",
        }}
      >
        [v1.0.0] — type 'help'
      </div>
    </div>
  );
}