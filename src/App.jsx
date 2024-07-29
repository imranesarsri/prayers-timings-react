import { createContext, useState, useEffect } from "react";
import Home from "./pages/Home";

export const DarkModeContext = createContext(null);

export default function App() {
  // Initialize theme from localStorage or use system preference
  const getInitialTheme = () => {
    if (localStorage.getItem('color-theme') === 'dark') {
      return 'dark';
    } else if (localStorage.getItem('color-theme') === 'light') {
      return 'light';
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.classList.toggle('dark', darkMode === 'dark');
    // Save the theme to localStorage
    localStorage.setItem('color-theme', darkMode);
  }, [darkMode]);

  const valuesContext = { darkMode, setDarkMode };

  return (
    <div className={darkMode}>
      <div className="bg-light-secondary dark:bg-dark-primary text-dark-default dark:text-light-default">
        <DarkModeContext.Provider value={valuesContext}>
          <Home />
        </DarkModeContext.Provider>
      </div>
    </div>
  );
}
