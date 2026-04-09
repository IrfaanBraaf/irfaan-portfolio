/* eslint-disable */
import React, { useState } from "react";
import { colors } from "../Config";

export default function MainPage() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [lockedCard, setLockedCard] = useState(null);

    const cards = [
        {
            key: "professional",
            title: "Professional Ideals",
            text:
                "My professional ideals guide every project. I believe in quality and integrity, which means writing clean, maintainable code that I can stand behind. I value innovation and continuous learning, always exploring new technologies to solve problems creatively. Collaboration is also key: I work closely with teammates and clients, sharing ideas and feedback to build the best possible product.",
        },
        {
            key: "values",
            title: "Personal Values",
            text:
                "Integrity, curiosity, empathy, and balance shape how I live and work. I value honesty and transparency, and I take responsibility for what I do. I enjoy learning continuously, growing through new experiences, and understanding different perspectives. I also believe in making time for family, well-being, and the things that keep life meaningful outside of work.",
        },
        {
            key: "goals",
            title: "Goals in Life",
            text:
                "My goals reflect both growth and purpose. Professionally, I aim to strengthen my full-stack development skills, contribute to meaningful projects, and eventually lead work that makes a real impact. Personally, I want to keep learning, stay connected to nature, and build a life that balances success, peace, and contribution to others.",
        },
    ];

    const activeCard = lockedCard || hoveredCard;

    return (
        <div
            style={{
                flex: 1,

                padding: "48px",
                background: colors.sand.light,
                color: colors.bark.dark,
                boxSizing: "border-box",
            }}
        >
            <section style={{ marginBottom: "50px" }}>
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            marginBottom: "16px",
                            color: colors.bark.dark,
                            fontSize: "42px",
                            fontWeight: 800,
                            letterSpacing: "0.5px",
                        }}
                    >
                        About Me
                    </h1>

                    <p
                        style={{
                            lineHeight: "1.8",
                            fontSize: "18px",
                            color: colors.bark.dark,
                            margin: 0,
                        }}
                    >
                        I am a passionate software developer with experience in building
                        full-stack web and mobile applications. I enjoy solving real-world
                        problems through technology and creating systems that are
                        reliable, scalable, and user-focused. I value thoughtful design,
                        practical solutions, and work that makes a positive difference.
                    </p>
                </div>
            </section>

            <section>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "20px",
                        alignItems: "start",
                    }}
                >
                    {cards.map((card) => {
                        const isExpanded = activeCard === card.key;

                        return (
                            <div
                                key={card.key}
                                onMouseEnter={() => setHoveredCard(card.key)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() =>
                                    setLockedCard((prev) =>
                                        prev === card.key ? null : card.key
                                    )
                                }
                                style={{
                                    background: isExpanded
                                        ? colors.sage50
                                        : colors.sage100,
                                    border: `1.5px solid ${isExpanded ? colors.sage600 : colors.sage200
                                        }`,
                                    borderRadius: "22px",
                                    padding: isExpanded ? "22px" : "14px 18px",
                                    cursor: "pointer",
                                    boxShadow: isExpanded
                                        ? "0 14px 30px rgba(92, 64, 51, 0.12)"
                                        : "0 8px 18px rgba(92, 64, 51, 0.06)",
                                    transition: "all 0.25s ease",
                                    transform: isExpanded ? "translateY(-6px)" : "translateY(0)",
                                    overflow: "hidden",
                                    minHeight: isExpanded ? "280px" : "72px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: "20px",
                                        color: colors.bark.dark,
                                        fontWeight: 700,
                                        width: "100%",
                                    }}
                                >
                                    {card.title}
                                </h2>

                                <div
                                    style={{
                                        marginTop: isExpanded ? "14px" : "0px",
                                        maxHeight: isExpanded ? "500px" : "0px",
                                        opacity: isExpanded ? 1 : 0,
                                        overflow: "hidden",
                                        transition: "all 0.25s ease",
                                        width: "100%",
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: 0,
                                            lineHeight: "1.7",
                                            color: colors.bark.dark,
                                            fontSize: "15px",
                                            textAlign: "left",
                                        }}
                                    >
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}