/* eslint-disable */
import React, { useState } from "react";
import { colors } from "../Config";
import ExperienceCard from "./ExperienceCard";
import TreeSVG from "./TreeSVG";

export default function CareerTree() {
  const [focused, setFocused] = useState(null);

  const roles = [
    {
      key: "intern",
      title: "Software Development Intern",
      company: "GreenTech Co.",
      dates: "Jun 2022 – Aug 2022",
      bullets: [
        "Built interactive web features in React and Node.js",
        "Collaborated with senior developers to debug and optimize code",
        "Prepared project documentation and unit tests"
      ]
    },
    {
      key: "junior",
      title: "Junior Software Developer",
      company: "EcoApps Ltd.",
      dates: "Sep 2022 – Present",
      bullets: [
        "Developed client-facing features with React and Redux",
        "Optimized backend APIs (Node.js, Express) for performance",
        "Contributed to agile sprints and code reviews"
      ]
    }
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "600px", marginTop: "20px" }}>
      <TreeSVG />

      {/* First card - left side */}
      <div style={{ position: "absolute", left: "20px", top: "130px", width: "150px" }}>
        <ExperienceCard
          title={roles[0].title}
          company={roles[0].company}
          dates={roles[0].dates}
          bullets={roles[0].bullets}
          isFocused={focused === roles[0].key}
          onClick={() => setFocused(focused === roles[0].key ? null : roles[0].key)}
        />
      </div>

      {/* Second card - right side */}
      <div style={{ position: "absolute", right: "20px", top: "290px", width: "150px" }}>
        <ExperienceCard
          title={roles[1].title}
          company={roles[1].company}
          dates={roles[1].dates}
          bullets={roles[1].bullets}
          isFocused={focused === roles[1].key}
          onClick={() => setFocused(focused === roles[1].key ? null : roles[1].key)}
        />
      </div>
    </div>
  );
}
