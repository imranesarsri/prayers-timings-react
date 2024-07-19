import { createContext, useState } from "react";
import Home from "./pages/Home";

export const DarkModeContext = createContext(null)
export default function App() {

  const [darkMode, setDarkMode] = useState('light')
  const valuesContext = { darkMode, setDarkMode }

  return (
    <div className={darkMode}>
      <div className="bg-light-secondary dark:bg-dark-primary text-dark-default dark:text-light-default">
        <DarkModeContext.Provider value={valuesContext}>
          <Home />
        </DarkModeContext.Provider>
      </div>
    </div>

  )
}