"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = ({ className = "" }) => {
    const { theme, toggleTheme, mounted } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={`theme-toggle ${className}`.trim()}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
        >
            {mounted ? (
                isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />
            ) : (
                <FiMoon aria-hidden="true" />
            )}
        </button>
    );
};

export default ThemeToggle;
