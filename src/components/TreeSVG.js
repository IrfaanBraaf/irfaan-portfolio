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
      ],
      position: { left: "15%", top: "60%" }
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
      ],
      position: { left: "60%", top: "35%" }
    }
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>

      <TreeSVG style={{ position: "absolute", top: 0, left: "calc(50% - 1px)" }} />

 
      {roles.map(role => (
        <ExperienceCard
          key={role.key}
          title={role.title}
          company={role.company}
          dates={role.dates}
          bullets={role.bullets}
          position={role.position}
          isFocused={focused === role.key}
          onClick={() => setFocused(focused === role.key ? null : role.key)}
        />
      ))}
    </div>
  );
}
