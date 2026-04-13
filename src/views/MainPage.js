/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";

export default function MainPage({ externalCommand, onCommandProcessed }) {
  const [command, setCommand] = useState("");
  const [outputLines, setOutputLines] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const welcomeMsg =
    "Welcome to my interactive terminal. Type 'help' to see available commands.";

  // Welcome typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(welcomeMsg.slice(0, i));
      i++;
      if (i > welcomeMsg.length) {
        clearInterval(interval);
        setOutputLines((prev) => [
          ...prev,
          { type: "output", content: welcomeMsg },
          { type: "output", content: "" },
        ]);
        // After welcome finishes, automatically run "about"
        setTimeout(() => {
          executeCommand("about");
        }, 300);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [outputLines]);

  // Focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Listen for external command from sidebar
  useEffect(() => {
    if (externalCommand && externalCommand.trim() !== "") {
      executeCommand(externalCommand);
      if (onCommandProcessed) onCommandProcessed();
    }
  }, [externalCommand]);

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    // Add command line to output
    setOutputLines((prev) => [
      ...prev,
      { type: "command", content: `visitor@portfolio:~$ ${cmd}` },
    ]);

    let response = "";
    let responseType = "output";

    switch (trimmedCmd) {
      case "help":
        response =
          "Available commands:\n" +
          "  about       - Learn about my professional ideals, values, and goals\n" +
          "  projects    - See a list of my projects\n" +
          "  experience  - View my work experience\n" +
          "  skills      - Check out my technical skills\n" +
          "  clear       - Clear the terminal screen\n" +
          "  help        - Show this help message";
        break;
      case "about":
        response = formatAboutOutput();
        break;
      case "projects":
        response = formatProjectsOutput();
        break;
      case "experience":
        response = formatExperienceOutput();
        break;
      case "skills":
        response = formatSkillsOutput();
        break;
      case "clear":
        setOutputLines([]);
        return;
      default:
        response = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
        responseType = "error";
    }

    if (response) {
      const lines = response.split("\n");
      lines.forEach((line) => {
        setOutputLines((prev) => [...prev, { type: responseType, content: line }]);
      });
      setOutputLines((prev) => [...prev, { type: "output", content: "" }]);
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    executeCommand(command);
    setCommand("");
  };

  // Formatting functions (unchanged from your original)
  const formatAboutOutput = () => {
    return (
      "══════════════════════════════════════════════════════════\n" +
      "                     ABOUT ME\n" +
      "══════════════════════════════════════════════════════════\n\n" +
      "I am a passionate software developer with experience in building\n" +
      "full-stack web and mobile applications. I enjoy solving real-world\n" +
      "problems through technology and creating systems that are reliable,\n" +
      "scalable, and user-focused.\n\n" +
      "► PROFESSIONAL IDEALS\n" +
      "   Quality, integrity, clean maintainable code. Innovation and\n" +
      "   continuous learning. Collaboration and feedback.\n\n" +
      "► PERSONAL VALUES\n" +
      "   Integrity, curiosity, empathy, balance. Honesty, transparency,\n" +
      "   and making time for what matters outside work.\n\n" +
      "► GOALS IN LIFE\n" +
      "   Strengthen full-stack skills, contribute to meaningful projects,\n" +
      "   stay connected to nature, and build a life of balance and purpose."
    );
  };

  const formatProjectsOutput = () => {
    return (
      "══════════════════════════════════════════════════════════\n" +
      "                    PROJECTS\n" +
      "══════════════════════════════════════════════════════════\n\n" +
      "📁 Project Alpha\n" +
      "   A full-stack e-commerce platform with React and Node.js\n" +
      "   Tech: React, Express, MongoDB, Stripe\n\n" +
      "📁 TaskFlow\n" +
      "   Collaborative task management app with real-time updates\n" +
      "   Tech: Next.js, Tailwind, Prisma, PostgreSQL\n\n" +
      "📁 WeatherDash\n" +
      "   Beautiful weather dashboard with interactive maps\n" +
      "   Tech: TypeScript, D3.js, OpenWeather API"
    );
  };

  const formatExperienceOutput = () => {
    return (
      "══════════════════════════════════════════════════════════\n" +
      "                   WORK EXPERIENCE\n" +
      "══════════════════════════════════════════════════════════\n\n" +
      "► Senior Developer @ TechCorp (2022–Present)\n" +
      "   - Lead frontend architecture for customer dashboard\n" +
      "   - Mentored junior developers, improved performance by 40%\n\n" +
      "► Full-Stack Engineer @ StartupX (2020–2022)\n" +
      "   - Built scalable microservices with Node.js and Docker\n" +
      "   - Implemented CI/CD pipelines and reduced deploy time\n\n" +
      "► Junior Developer @ WebAgency (2018–2020)\n" +
      "   - Developed responsive websites for clients\n" +
      "   - Collaborated with designers to deliver pixel-perfect UIs"
    );
  };

  const formatSkillsOutput = () => {
    return (
      "══════════════════════════════════════════════════════════\n" +
      "                    TECHNICAL SKILLS\n" +
      "══════════════════════════════════════════════════════════\n\n" +
      "Languages:   JavaScript (ES6+), TypeScript, Python, Go\n" +
      "Frontend:    React, Next.js, Vue, Tailwind CSS\n" +
      "Backend:     Node.js, Express, Django, FastAPI\n" +
      "Databases:   PostgreSQL, MongoDB, Redis\n" +
      "DevOps:      Docker, Kubernetes, GitHub Actions, AWS\n" +
      "Tools:       Git, Webpack, Vite, Figma"
    );
  };

  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0c0c0c",
        fontFamily: "'Courier New', Courier, monospace",
        color: "#33ff33",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          border: "1px solid #2a2a2a",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 30px rgba(0, 255, 0, 0.1)",
        }}
      >
        {/* Terminal header */}
        <div
          style={{
            background: "#1a1a1a",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #333",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }} />
          </div>
          <div style={{ marginLeft: 16, color: "#aaa", fontSize: 14, fontWeight: "bold" }}>
            visitor@portfolio:~
          </div>
        </div>

        {/* Terminal body */}
        <div
          ref={terminalBodyRef}
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            fontSize: "15px",
            lineHeight: "1.6",
            background: "#0c0c0c",
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Typing animation (only while welcome is being typed) */}
          {typingText && outputLines.length === 0 && (
            <div style={{ display: "flex" }}>
              <span style={{ color: "#00ff00", marginRight: 8 }}>$</span>
              <span>{typingText}</span>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: "1.2em",
                  background: showCursor ? "#33ff33" : "transparent",
                  marginLeft: 2,
                }}
              />
            </div>
          )}

          {/* Output lines */}
          {outputLines.map((line, index) => (
            <div
              key={index}
              style={{
                color: line.type === "command" ? "#00ff00" : line.type === "error" ? "#ff6666" : "#bbffbb",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {line.content}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleCommandSubmit} style={{ display: "flex", marginTop: 8 }}>
            <span style={{ color: "#00ff00", marginRight: 8, fontWeight: "bold" }}>
              visitor@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#33ff33",
                fontFamily: "inherit",
                fontSize: "15px",
                flex: 1,
                caretColor: "#00ff00",
              }}
              autoFocus
              spellCheck={false}
            />
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: "1.2em",
                background: showCursor ? "#33ff33" : "transparent",
                marginLeft: 2,
              }}
            />
          </form>
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          marginTop: 8,
          color: "#2a5a2a",
          fontSize: 12,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>— Click sidebar items or type commands —</span>
        <span>help • about • projects • skills • experience</span>
      </div>
    </div>
  );
}