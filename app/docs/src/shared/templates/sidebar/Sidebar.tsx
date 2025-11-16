import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  componentList,
  gettingStartedList,
  customHooksList,
} from "../../../constants/constants";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const location = useLocation();

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        {/* Getting Started Section */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Getting Started</h4>
          {gettingStartedList?.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleLinkClick}
              className={`${styles.sidebarLink} ${
                isActive(item.href) ? styles.active : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Components Section */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Components</h4>
          {componentList?.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleLinkClick}
              className={`${styles.sidebarLink} ${
                isActive(item.href) ? styles.active : ""
              }`}
            >
              {item.component}
            </Link>
          ))}
        </div>

        {/* Custom Hooks Section */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Custom Hooks</h4>
          {customHooksList?.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleLinkClick}
              className={`${styles.sidebarLink} ${
                isActive(item.href) ? styles.active : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;