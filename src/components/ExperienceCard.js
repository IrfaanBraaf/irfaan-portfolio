/* eslint-disable */
import React from "react";
import { colors } from "../Config";

export default function ExperienceCard({ title, company, dates, bullets, isFocused, onClick }) {
    return (
        <div
            onClick={onClick}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
            role="button"
            tabIndex="0"
            style={{
                background: isFocused ? colors.sage.light : "#f9f7f3",
                border: `2px solid ${isFocused ? colors.sage.dark : colors.sage.DEFAULT}`,
                borderRadius: "10px",
                padding: "14px",
                boxShadow: isFocused ? `0 0 12px rgba(0,0,0,0.12)` : `0 2px 6px rgba(0,0,0,0.08)`,
                transition: "all 0.3s ease",
                cursor: "pointer",
                outline: "none",
            }}
        >
            <h4 style={{ margin: "0 0 4px 0", color: colors.bark.dark, fontSize: "14px", fontWeight: 600 }}>
                {title}
            </h4>
            <div style={{ fontSize: "12px", color: colors.sage.dark, marginBottom: "6px", fontWeight: 500 }}>
                {company}
            </div>
            <div style={{ fontSize: "11px", color: colors.sage.dark, marginBottom: "6px" }}>
                {dates}
            </div>

            {isFocused && (
                <div style={{ marginTop: "8px", lineHeight: "1.4", color: colors.bark.dark, fontSize: "12px" }}>
                    <ul style={{ margin: 0, paddingLeft: "16px" }}>
                        {bullets.map((point, i) => (
                            <li key={i} style={{ marginBottom: "4px" }}>{point}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
