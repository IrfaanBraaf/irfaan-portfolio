import { useState } from "react";
import MainPage from "./views/MainPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [activePage, setActivePage] = useState("About Me");
  const [externalCommand, setExternalCommand] = useState("");

  const handleNavigate = (item) => {
    setActivePage(item);

    const command = item === "About Me" ? "about" : item.toLowerCase();
    setExternalCommand(command);
  };

  const handleCommandProcessed = () => {
    setExternalCommand("");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", scrollbarGutter: "stable", scrollBehavior: "smooth" }}>
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />
      <MainPage externalCommand={externalCommand} onCommandProcessed={handleCommandProcessed} />
    </div>
  );
}

export default App;
