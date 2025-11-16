import { useCopyToClipboard } from "3ui";
import "./CopyButton.css";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton = ({ text, className }: CopyButtonProps) => {
  const { copy, isCopied } = useCopyToClipboard();

  const handleCopy = () => {
    copy(text);
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-button ${isCopied ? "copied" : ""} ${className || ""}`}
      title={isCopied ? "Copied!" : "Copy to clipboard"}
      aria-label={isCopied ? "Copied!" : "Copy to clipboard"}
    >
      {isCopied ? (
        <svg
          className="copy-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          className="copy-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      {isCopied && <span className="copy-tooltip">Copied!</span>}
    </button>
  );
};