/* eslint-disable */
import { React , useState} from "react";
import { colors } from "../Config";
import profileImg from "../images/profile.jpeg";

export default function Sidebar({ onNavigate }) {
  const menuItems = ["About Me", "Experience", "Skills", "Projects"];
  const {active , setactive } = useState("About Me");
  return (
    <div
      style={{
        width: "260px",
        background: colors.bark.dark, 
        color: colors.cream.light,
        padding: "28px 22px",
        minHeight: "100vh",
        boxSizing: "border-box",
        borderRight: `1px solid ${colors.bark.light}`,
      }}
    >
    
      <div style={{ marginBottom: "24px" }}>
        <img
          src={profileImg}
          alt="Profile"
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
            borderRadius: "18px",
            border: `2px solid ${colors.sage.light}`,
          }}
        />
      </div>

      
      <div style={{ marginBottom: "32px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 700,
            color: colors.cream.light,
          }}
        >
          Irfaan Braaf
        </h2>

        <h3
          style={{
            margin: "6px 0 0 0",
            fontSize: "13px",
            fontWeight: 500,
            color: colors.sage.light,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
           Software Developer
        </h3>
      </div>

 
      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => onNavigate?.(item)}
          style={{
            margin: "14px 0",
            padding: "12px 14px",
            borderRadius: "16px", 
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 500,
            color: colors.cream.light,


            border: `1.5px solid ${colors.sage.DEFAULT}`,
            background: "rgba(156, 175, 136, 0.08)",

            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = colors.sage.dark;
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = colors.sage.light;
            e.currentTarget.style.transform = "translateX(6px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(156, 175, 136, 0.08)";
            e.currentTarget.style.color = colors.cream.light;
            e.currentTarget.style.borderColor = colors.sage.DEFAULT;
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
}