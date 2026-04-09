/* eslint-disable */
import React from "react";
import { colors } from "../Config";
import CareerTree from "../components/CareerTree";

export default function ExperiencePage() {
    return (
        <div style={{ flex: 1, padding: "48px", background: colors.sand.light, color: colors.bark.dark, boxSizing: "border-box" }}>
            <h1 style={{ fontSize: "32px", marginBottom: "16px", textAlign: "center" }}>Experience</h1>
            <p style={{ maxWidth: "800px", lineHeight: "1.6", margin: "0 auto 40px" }}>
                Below is a career timeline depicted as a stylized tree. Branches show past roles: on the left (older) branch is an Intern role, on the right (newer) branch is a Junior Developer role. Click or tap each card to see more details.
            </p>
            <CareerTree />
        </div>
    );
}
