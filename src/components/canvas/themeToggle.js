"use client";
import toggleStyle from "../../style/themeToggle.module.css"
import { useTheme } from "../store/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={toggleStyle.themeBtn + " " + (theme === "light" ? toggleStyle.darkMode : toggleStyle.lightMode)} aria-label="theme-button">
    </button>
  );
}
