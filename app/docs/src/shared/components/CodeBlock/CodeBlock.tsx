import { CopyButton } from "../CopyButton/CopyButton";
import "./CodeBlock.css";

export const CodeBlock = ({ code, language= "tsx" }) => {
  return (
    <div className="code-box">
      <div className="code-header">
        <div className="code-header-left">
          <svg
            className="code-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="code-language">{language}</span>
        </div>

        <CopyButton text={code} />
      </div>

      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  );
};
