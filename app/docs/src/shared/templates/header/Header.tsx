import { Link } from "react-router";
import { useTheme } from "../../../context/themeContext";
import styles from "./Header.module.css";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {onMenuClick && (
          <button
            className={styles.menuButton}
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}
        <Link to={"/"} className={styles.headerIcon}>l3UI</Link>
        {/* <ul className={styles.navmenu}>
          <li className={styles.navitem}>Components</li>
          <li className={styles.navitem}>Documentation</li>
        </ul> */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
