import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import MainPage from "./views/MainPage";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Sidebar from "./components/Sidebar";

function App() {
  const [activePage, setActivePage] = useState("About Me");

  const renderContent = () => {
    switch (activePage) {
      case "About Me":
        return <MainPage />;
      case "Experience":
        return <Experience />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", scrollbarGutter: "stable", scrollBehavior: "smooth" }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      {renderContent()}
    </div>
  );
}

export default App;
