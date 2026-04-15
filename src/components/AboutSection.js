import React from "react";
import SectionHeader from "./SectionHeader";

const AboutSection = () => {
    return (
        <div>
            <SectionHeader title="ABOUT ME" />
            <div style={{ color: "#ccffcc", fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
                I am a dedicated software developer with experience building
                full-stack web and mobile applications. I enjoy turning real-world
                problems into practical solutions through technology, and I care
                about creating systems that are dependable, scalable, and built
                with the user in mind.
            </div>
            <div style={{ color: "#ccffcc", fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
                <strong>► PROFESSIONAL IDEALS</strong><br />
                Strong work ethic, honesty, and clean, maintainable code.
                Innovation, steady learning, and working well with others.
            </div>
            <div style={{ color: "#ccffcc", fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
                <strong>► PERSONAL VALUES</strong><br />
                Integrity, curiosity, empathy, and balance. I value honesty,
                transparency, and making time for the things that matter beyond work.
            </div>
            <div style={{ color: "#ccffcc", fontSize: "18px", lineHeight: "1.6" }}>
                <strong>► GOALS IN LIFE</strong><br />
                Keep growing my full-stack skills, contribute to meaningful projects,
                stay close to nature, and build a life with purpose and balance.
            </div>
        </div>
    );
};

export default AboutSection;