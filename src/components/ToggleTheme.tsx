import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(currentTheme);

  if (currentTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        type="button"
        className="btn btn-ghost normal-case text-xl"
      >
        <SunIcon className="h-5" />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => setTheme("dark")}
        type="button"
        className="btn btn-ghost normal-case text-xl"
      >
        <MoonIcon className="h-5" />
      </button>
    );
  }
};

export default ToggleTheme;
