import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");

    if (newMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      {/* 다크 모드 토글 버튼 */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "🌙" : "☀️"}
      </button>

      {/* 네비게이션 링크 */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
      </div>
    </nav>
  );
}

export default NavBar;
