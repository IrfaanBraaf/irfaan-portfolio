/* eslint-disable */
import React from "react";

export default function Sidebar({  }) {
  const menuItems = ["MainPage", "Experience", "Skills", "Projects"];

const Navigate= (item) =>{
    switch (item) {
      case "MainPage":
        return ;
      case "Experience":
        return ;
      case "Skills":
        return ;
      case "Projects":
        return;
      default:
        return ;
    }

}
  
  return (
    <div
      style={{
        width: "250px",
        background: "#1e1e2f",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Irfaan</h2>

      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => Navigate(item)}
          style={{
            margin: "15px 0",
            cursor: "pointer",
            color:  "#00d4ff",
            transition: "0.2s",
          }}
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
}