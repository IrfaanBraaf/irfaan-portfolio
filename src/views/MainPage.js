/* eslint-disable */
import React, { useState, useEffect, useRef, useCallback } from "react";
import Styles from "../Styles";
import { useTypewriter } from "../components/UseTypewriter";
import { ProjectsData } from "../ProjectData";
import ProjectsGallery from "../components/ProjectsGallery";

export default function MainPage({ activePage, onPageChange, externalCommand, onCommandProcessed }) {
  const [command, setCommand] = useState("");
  const [outputLines, setOutputLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [pendingLines, setPendingLines] = useState([]);
  const terminalBodyRef = useRef(null);
  const outputAreaRef = useRef(null);
  const inputRef = useRef(null);
  const hasInitialized = useRef(false);

  const { isTyping } = useTypewriter(pendingLines, setOutputLines);

  const terminalPath = activePage === "About Me" ? "/about me" : `/${(activePage || "home").toLowerCase()}`;

  // Initialize: static "Welcome." then queue about section
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    setOutputLines([{ type: "output", content: "Welcome." }]);

    setTimeout(() => {
      enqueueResponse(formatAboutOutput(), "output");
      setPendingLines((prev) => [...prev, { type: "output", content: "" }]);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(blink);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (outputAreaRef.current) {
      outputAreaRef.current.scrollTop = outputAreaRef.current.scrollHeight;
    }
  }, [outputLines]);

  // Focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // External command handling
  useEffect(() => {
    if (externalCommand?.trim()) {
      executeCommand(externalCommand);
      onCommandProcessed?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalCommand]);


  // Helper: Queue text lines for typing
  const enqueueResponse = useCallback((responseText, type = "output") => {
    if (!responseText || typeof responseText !== "string") return;
    const lines = responseText.split("\n").map((line) => ({ type, content: line }));
    setPendingLines((prev) => [...prev, ...lines]);
  }, []);

  // Execute command – CLEARS SCREEN before running new command (except 'clear')
  const executeCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

      // Clear screen before every command (unless it's 'clear' itself)
      if (trimmed !== "clear") {
        setOutputLines([]);
        setPendingLines([]);
      }

      // Add command line to output
      setOutputLines((prev) => [
        ...prev,
        { type: "command", content: `visitor@portfolio:~$ ${cmd}` },
      ]);

      let response = "";
      let responseType = "output";

      switch (trimmed) {
        case "help":
          response = formatHelpOutput();
          break;
        case "about":
          onPageChange("About Me");
          response = formatAboutOutput();
          break;
          case "projects": {
          onPageChange("Projects");
          setOutputLines((prev) => [
            ...prev,
            {
              type: "component",
              component: <ProjectsGallery projects={ProjectsData || []} />,
            },
            { type: "output", content: "" },
          ]);
          return;
        }
        case "experience":
          onPageChange("Experience");
          response = formatExperienceOutput();
          break;
        case "skills":
          onPageChange("Skills");
          response = formatSkillsOutput();
          break;
        case "clear":
          setOutputLines([]);
          setPendingLines([]);
          return; // already cleared above, just return
        default:
          response = `Command not found: ${trimmed}. Type 'help' for available commands.`;
          responseType = "error";
      }

      if (response) {
        enqueueResponse(response, responseType);
        setPendingLines((prev) => [...prev, { type: "output", content: "" }]);
      }
    },
    [enqueueResponse, onPageChange]
  );

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (command.trim()) {
      executeCommand(command);
      setCommand("");
    }
  };

  // Formatters (unchanged)
  const formatHelpOutput = () => {
    return [
      "Available commands:",
      "  about       - Learn about my professional ideals, values, and goals",
      "  projects    - See a list of my projects",
      "  experience  - View my work experience",
      "  skills      - Check out my technical skills",
      "  clear       - Clear the terminal screen",
      "  help        - Show this help message",
    ].join("\n");
  };

 const formatAboutOutput = () => {
  return [
    "══════════════════════════════════════════════════════════",
    "                     ABOUT ME",
    "══════════════════════════════════════════════════════════",
    "",
    "I am a dedicated software developer with experience building",
    "full-stack web and mobile applications. I enjoy turning real-world",
    "problems into practical solutions through technology, and I care",
    "about creating systems that are dependable, scalable, and built",
    "with the user in mind.",
    "",
    "► PROFESSIONAL IDEALS",
    "   Strong work ethic, honesty, and clean, maintainable code.",
    "   Innovation, steady learning, and working well with others.",
    "",
    "► PERSONAL VALUES",
    "   Integrity, curiosity, empathy, and balance. I value honesty,",
    "   transparency, and making time for the things that matter beyond work.",
    "",
    "► GOALS IN LIFE",
    "   Keep growing my full-stack skills, contribute to meaningful projects,",
    "   stay close to nature, and build a life with purpose and balance.",
  ].join("\n");
};

const formatExperienceOutput = () => {
  return [
    "══════════════════════════════════════════════════════════",
    "                   WORK EXPERIENCE",
    "══════════════════════════════════════════════════════════",
    "",
    "► Junior Software Developer @ Plum Systems (01/2025–Present)",
    "   - Develop and support web & mobile apps; ensure system reliability",
    "   - Full‑stack work (Java, Python, React/React Native): build, update, support features",
    "   - Run weekly client meetings, gather requirements, manage deadlines",
    "   - Optimize SQL & NoSQL databases for integrity and performance",
    "",
    "► Software Developer Intern @ Plum Systems (06/2024–12/2024)",
    "   - Trained in front‑end & back‑end development across the full stack",
    "   - Contributed to UI/UX design and delivered multiple user‑focused projects",
  ].join("\n");
};

  const formatSkillsOutput = () => {
  return [
    "══════════════════════════════════════════════════════════",
    "                    TECHNICAL SKILLS",
    "══════════════════════════════════════════════════════════",
    "",
    "Languages:      JavaScript (ES6+), SQL, HTML5, CSS3",
    "Frontend:       React, React Native",
    "Backend:        Full‑stack web development",
    "Databases:      Firestore, Firebase Realtime Database, SQL (NoSQL)",
    "Tools & Others: Git, REST APIs, UI/UX Design",
    "",
    "══════════════════════════════════════════════════════════",
    "                      SOFT SKILLS",
    "══════════════════════════════════════════════════════════",
    "",
    "• Client Relationship Management & requirements gathering",
    "• Weekly client meetings & deadline management",
    "• Team collaboration & cross‑functional communication",
    "• Problem‑solving & system reliability focus",
    "• Adaptability (full‑stack web & mobile support)",
  ].join("\n");
};


  const renderOutputLine = (line, idx) => {
    const safeLine = line || { type: "output", content: "" };
    if (safeLine.type === "component") {
      return (
        <div key={idx}>
          {safeLine.component && React.isValidElement(safeLine.component) ? (
            safeLine.component
          ) : (
            <div style={Styles.line}>Unable to load this section. Try again or reload the page.</div>
          )}
        </div>
      );
    }

    const color =
      safeLine.type === "command"
        ? "#00ff00"
        : safeLine.type === "error"
        ? "#ff8888"
        : "#ccffcc";

    return (
      <div key={idx} style={{ ...Styles.line, color }}>
        {safeLine.content || ""}
      </div>
    );
  };

  return (
    <div style={Styles.container}>
      <div style={Styles.terminalWindow}>
        <div style={Styles.terminalHeader}>
          <div style={Styles.windowControls}>
            <span style={{ ...Styles.controlDot, background: "#ff5f56" }} />
            <span style={{ ...Styles.controlDot, background: "#ffbd2e" }} />
            <span style={{ ...Styles.controlDot, background: "#27c93f" }} />
          </div>
          <div style={Styles.terminalTitle}>visitor@portfolio:{terminalPath}</div>
        </div>

        <div
          ref={terminalBodyRef}
          style={Styles.terminalBody}
          onClick={() => inputRef.current?.focus()}
        >
          <div ref={outputAreaRef} style={Styles.outputArea}>
            {outputLines.map(renderOutputLine)}
          </div>

          <form onSubmit={handleCommandSubmit} style={Styles.inputForm}>
            <span style={Styles.prompt}>visitor@portfolio:{terminalPath}$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              style={Styles.input}
              autoFocus
              spellCheck={false}
            />
            <span
              style={{
                ...Styles.cursor,
                background: showCursor ? "#33ff33" : "transparent",
              }}
            />
          </form>
        </div>
      </div>
      {/* Status bar removed */}
    </div>
  );
}