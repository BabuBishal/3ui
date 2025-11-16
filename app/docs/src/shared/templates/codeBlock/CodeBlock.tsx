import { memo } from "react";
import { CopyButton } from "../../components/CopyButton/CopyButton";
import styles from "./CodeBlock.module.css";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  showCopy?: boolean;
}

const CodeBlock = ({ 
  code, 
  language = "tsx", 
  title = "Code Example",
  showLineNumbers = false,
  showCopy = true
}: CodeBlockProps) => {
  return (
    <div className={styles.codeBlockWrapper}>
      <div className={styles.codeBlockHeader}>
        <span className={styles.title}>{title}</span>
        <div className={styles.actions}>
          {language && <span className={styles.language}>{language}</span>}
          {showCopy && <CopyButton text={code} />}
        </div>
      </div>
      <pre className={styles.codeBlock}>
        <code className={`language-${language}`}>
          {showLineNumbers ? (
            code.split('\n').map((line, i) => (
              <div key={i} className={styles.line}>
                <span className={styles.lineNumber}>{i + 1}</span>
                <span className={styles.lineContent}>{line}</span>
              </div>
            ))
          ) : (
            code
          )}
        </code>
      </pre>
    </div>
  );
};

export default memo(CodeBlock);