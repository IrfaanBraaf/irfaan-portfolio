/* eslint-disable */
import React from "react";
import { colors } from "../Config";
import profileImg from "../images/profile.jpeg"; 
export default function Sidebar({}) {
  const menuItems = ["MainPage", "Experience", "Skills", "Projects"];

  const Navigate = (item) => {
    switch (item) {
      case "MainPage":
        return;
      case "Experience":
        return;
      case "Skills":
        return;
      case "Projects":
        return;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        width: "250px",
        background: colors.shades.sage900,
        color: colors.grayMuted,
        padding: "24px 20px",
        minHeight: "100vh",
      }}
    >


          <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "24px",
        }}
      >
        <img
          src={profileImg}
          alt="Irfaan Braaf profile"
          style={{
            width: "1000px",   
            height: "120px",   
            objectFit: "cover",
            border: `2px solid ${colors.sage.light}`,
            boxShadow: `0 4px 12px rgba(0,0,0,0.2)`,
            borderRadius: "20px", 
 
          }}
        />
      </div>


      <div style={{ marginBottom: "30px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "26px",
            fontWeight: 700,
            color: colors.sage.light,
            letterSpacing: "0.5px",
            lineHeight: "1.2",
          }}
        >
          Irfaan Braaf
        </h2>

        <h3
          style={{
            margin: "8px 0 0 0",
            fontSize: "14px",
            fontWeight: 500,
            color: colors.sage.light,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Junior Software Developer
        </h3>
      </div>

      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => Navigate(item)}
          style={{
            margin: "15px 0",
            cursor: "pointer",
            color: colors.sage.light,
            transition: "0.2s",
            fontSize: "15px",
            fontWeight: 500,
          }}
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
}