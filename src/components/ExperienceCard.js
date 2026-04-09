/* eslint-disable */
import React from "react";
import { colors } from "../Config";

export default function ExperienceCard({ title, company, dates, bullets, position, isFocused, onClick }) {
  return (
    <div
      onClick={onClick}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      role="button"
      tabIndex="0"
      style={{
        position: "absolute",
        left: position.left,
        top: position.top,
        transform: "translate(-50%, -50%)",
        background: isFocused ? colors.sage.light : colors.sage.light,
        border: `2px solid ${isFocused ? colors.sage.dark : colors.sage.DEFAULT}`,
        borderRadius: "12px",
        padding: "16px",
        width: "200px",
        boxShadow: isFocused ? `0 0 16px rgba(0,0,0,0.15)` : `0 0 8px rgba(0,0,0,0.1)`,
        transition: "all 0.3s ease",
        cursor: "pointer",
        outline: "none",
      }}
    >
      <h3 style={{ margin: "0 0 4px 0", color: colors.bark.dark, textAlign: "center", fontSize: "18px" }}>
        {title}
      </h3>
      <div style={{ fontSize: "13px", color: colors.oliveWood?.dark || colors.bark.dark, textAlign: "center", marginBottom: "8px" }}>
        <em>{company}</em><br/>
        <span style={{ fontSize: "12px" }}>{dates}</span>
      </div>

      {isFocused && (
        <div style={{ marginTop: "8px", lineHeight: "1.5", color: colors.bark.dark }}>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
