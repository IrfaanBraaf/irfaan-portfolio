import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./views/MainPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>

      {/* General  */}
      <Route path="/irfaan-portfolio" element={<MainPage />} />
   

    </Routes>
    </BrowserRouter>
  );
}

export default App;
