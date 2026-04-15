import { useState } from "react";
import MainPage from "./views/MainPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [activePage, setActivePage] = useState("About Me");
  const [externalCommand, setExternalCommand] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (item) => {
    setActivePage(item);

    const command = item === "About Me" ? "about" : item.toLowerCase();
    setExternalCommand(command);
    setSidebarOpen(false);
  };

  const handleCommandProcessed = () => {
    setExternalCommand("");
  };

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((current) => !current)}
      />

      <main className="content-shell">
        <div className="mobile-header">
          <button type="button" className="mobile-sidebar-toggle" onClick={() => setSidebarOpen(true)}>
            ☰ Menu
          </button>
          <div className="mobile-page-title">{activePage}</div>
        </div>

        <MainPage
          activePage={activePage}
          onPageChange={setActivePage}
          externalCommand={externalCommand}
          onCommandProcessed={handleCommandProcessed}
        />
      </main>
    </div>
  );
}

export default App;
