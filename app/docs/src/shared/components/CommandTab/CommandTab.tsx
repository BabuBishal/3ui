import { CopyButton } from "../CopyButton/CopyButton";
import "./CommandTab.css";

export const CommandTab = ({ label, command }) => {
  return (
    <div className="command-tab">
      <div className="command-header">
        <div className="command-header-left">
          <svg
            className="package-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <span className="command-label">{label}</span>
        </div>

        <CopyButton text={command} />
      </div>

      <pre className="command-content">
        <code>{command}</code>
      </pre>
    </div>
  );
};
