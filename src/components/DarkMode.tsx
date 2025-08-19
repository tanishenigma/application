import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div>
      {isDarkMode ? (
        <button
          className="flex gap-x-1 text-xs bg-zinc-200 text-black shadow-md shadow-black/20 rounded-xl p-4"
          onClick={() => setIsDarkMode(!isDarkMode)}>
          <Sun className="w-4 h-4" />
          Light Mode
        </button>
      ) : (
        <button
          className="flex  gap-x-1 text-xs bg-zinc-700 text-white shadow-md shadow-black/20 rounded-xl p-4"
          onClick={() => setIsDarkMode(!isDarkMode)}>
          <Moon className="w-4 h-4" />
          <span>Dark Mode</span>
        </button>
      )}
    </div>
  );
};

export default DarkMode;
