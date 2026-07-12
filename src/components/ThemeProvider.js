"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
    mounted: false,
});

const getPreferredTheme = () => {
    if (typeof window === "undefined") return "light";

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const initialTheme = getPreferredTheme();
        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", nextTheme);
            document.documentElement.classList.toggle("dark", nextTheme === "dark");
            return nextTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
