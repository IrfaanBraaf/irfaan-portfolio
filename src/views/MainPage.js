/* eslint-disable */
import React, { useState, useEffect, useRef, useCallback } from "react";
import Styles from "../Styles";
import { UseTypewriter } from "../components/UseTypewriter";
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

  const { isTyping } = UseTypewriter(pendingLines, setOutputLines);

  const terminalPath = activePage === "About Me" ? "/about me" : `/${activePage.toLowerCase()}`;

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

  // Execute command
  const executeCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim().toLowerCase();
      if (!trimmed) return;

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
        case "projects":
          onPageChange("Projects");
          setOutputLines((prev) => [
            ...prev,
            {
              type: "component",
              component: <ProjectsGallery projects={ProjectsData} />,
            },
            { type: "output", content: "" },
          ]);
          return;
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
          return;
        default:
          response = `Command not found: ${trimmed}. Type 'help' for available commands.`;
          responseType = "error";
      }

      if (response) {
        enqueueResponse(response, responseType);
        setPendingLines((prev) => [...prev, { type: "output", content: "" }]);
      }
    },
    [enqueueResponse]
  );

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (command.trim() && !isTyping) {
      executeCommand(command);
      setCommand("");
    }
  };

  // Formatters
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
      "I am a passionate software developer with experience in building",
      "full-stack web and mobile applications. I enjoy solving real-world",
      "problems through technology and creating systems that are reliable,",
      "scalable, and user-focused.",
      "",
      "► PROFESSIONAL IDEALS",
      "   Quality, integrity, clean maintainable code. Innovation and",
      "   continuous learning. Collaboration and feedback.",
      "",
      "► PERSONAL VALUES",
      "   Integrity, curiosity, empathy, balance. Honesty, transparency,",
      "   and making time for what matters outside work.",
      "",
      "► GOALS IN LIFE",
      "   Strengthen full-stack skills, contribute to meaningful projects,",
      "   stay connected to nature, and build a life of balance and purpose.",
    ].join("\n");
  };

  const formatExperienceOutput = () => {
    return [
      "══════════════════════════════════════════════════════════",
      "                   WORK EXPERIENCE",
      "══════════════════════════════════════════════════════════",
      "",
      "► Senior Developer @ TechCorp (2022–Present)",
      "   - Lead frontend architecture for customer dashboard",
      "   - Mentored junior developers, improved performance by 40%",
      "",
      "► Full-Stack Engineer @ StartupX (2020–2022)",
      "   - Built scalable microservices with Node.js and Docker",
      "   - Implemented CI/CD pipelines and reduced deploy time",
      "",
      "► Junior Developer @ WebAgency (2018–2020)",
      "   - Developed responsive websites for clients",
      "   - Collaborated with designers to deliver pixel-perfect UIs",
    ].join("\n");
  };

  const formatSkillsOutput = () => {
    return [
      "══════════════════════════════════════════════════════════",
      "                    TECHNICAL SKILLS",
      "══════════════════════════════════════════════════════════",
      "",
      "Languages:   JavaScript (ES6+), TypeScript, Python, Go",
      "Frontend:    React, Next.js, Vue, Tailwind CSS",
      "Backend:     Node.js, Express, Django, FastAPI",
      "Databases:   PostgreSQL, MongoDB, Redis",
      "DevOps:      Docker, Kubernetes, GitHub Actions, AWS",
      "Tools:       Git, Webpack, Vite, Figma",
    ].join("\n");
  };

  // Render output line
  const renderOutputLine = (line, idx) => {
    if (line.type === "component") {
      return <div key={idx}>{line.component}</div>;
    }
    return (
      <div
        key={idx}
        style={{
          ...Styles.line,
          color:
            line.type === "command"
              ? "#00ff00"
              : line.type === "error"
                ? "#ff8888"
                : "#ccffcc",
        }}
      >
        {line.content}
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
              disabled={isTyping}
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

      <div style={Styles.statusBar}>
        <span>— Click anywhere or type commands —</span>
        <span>help • about • projects • skills • experience</span>
      </div>
    </div>
  );
}