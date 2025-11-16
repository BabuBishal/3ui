import { ReactNode, useState } from "react";
import { CopyButton } from "../CopyButton/CopyButton";
import "./Showcase.css";

interface ShowcaseProps {
  title?: string;
  description?: string;
  code: string;
  children: ReactNode;
  centered?: boolean;
  direction?: "row" | "column";
  language?: string;
}

export const Showcase = ({
  title,
  description,
  code,
  children,
  centered = false,
  direction = "row",
  language = "tsx",
}: ShowcaseProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="showcase">
      {(title || description) && (
        <div className="showcase-header">
          {title && <h3 className="showcase-title">{title}</h3>}
          {description && <p className="showcase-description">{description}</p>}
        </div>
      )}

      <div className="showcase-tabs">
        <button
          className={`showcase-tab ${activeTab === "preview" ? "active" : ""}`}
          onClick={() => setActiveTab("preview")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Preview
        </button>
        <button
          className={`showcase-tab ${activeTab === "code" ? "active" : ""}`}
          onClick={() => setActiveTab("code")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          Code
        </button>
      </div>

      {activeTab === "preview" ? (
        <div className={`showcase-preview ${centered ? "centered" : ""} ${direction}`}>
          {children}
        </div>
      ) : (
        <div className="showcase-code-container">
          <div className="showcase-code-header">
            <span className="showcase-code-language">{language}</span>
            <CopyButton text={code} />
          </div>
          <pre className="showcase-code">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};