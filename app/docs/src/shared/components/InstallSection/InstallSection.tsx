import { CopyButton } from "../CopyButton/CopyButton";
import "./InstallSection.css";

interface InstallSectionProps {
  componentName: string;
  importCode: string;
  usageCode: string;
}

export const InstallSection = ({
  componentName,
  importCode,
  usageCode,
}: InstallSectionProps) => {
  const npmInstall = "npm install 3ui";
  const yarnInstall = "yarn add 3ui";
  const pnpmInstall = "pnpm add 3ui";

  return (
    <div className="install-section">
      <div className="install-header">
        <h2 className="install-title">Installation & Usage</h2>
        <p className="install-subtitle">
          Get started with {componentName} in your project
        </p>
      </div>

      {/* Step 1: Install */}
      <div className="install-step">
        <div className="step-header">
          <span className="step-number">1</span>
          <div className="step-info">
            <h3 className="step-title">Install the library</h3>
            <p className="step-description">Choose your preferred package manager</p>
          </div>
        </div>
        
        <div className="command-tabs">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span className="command-label">npm</span>
              </div>
              <CopyButton text={npmInstall} />
            </div>
            <pre className="command-content">
              <code>{npmInstall}</code>
            </pre>
          </div>

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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span className="command-label">yarn</span>
              </div>
              <CopyButton text={yarnInstall} />
            </div>
            <pre className="command-content">
              <code>{yarnInstall}</code>
            </pre>
          </div>

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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span className="command-label">pnpm</span>
              </div>
              <CopyButton text={pnpmInstall} />
            </div>
            <pre className="command-content">
              <code>{pnpmInstall}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Step 2: Import */}
      <div className="install-step">
        <div className="step-header">
          <span className="step-number">2</span>
          <div className="step-info">
            <h3 className="step-title">Import the component</h3>
            <p className="step-description">Add the import statement to your file</p>
          </div>
        </div>
        
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
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span className="code-language">TypeScript</span>
            </div>
            <CopyButton text={importCode} />
          </div>
          <pre className="code-content">
            <code>{importCode}</code>
          </pre>
        </div>
      </div>

      {/* Step 3: Use */}
      <div className="install-step">
        <div className="step-header">
          <span className="step-number">3</span>
          <div className="step-info">
            <h3 className="step-title">Use in your component</h3>
            <p className="step-description">Start using {componentName} in your React components</p>
          </div>
        </div>
        
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
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span className="code-language">TypeScript</span>
            </div>
            <CopyButton text={usageCode} />
          </div>
          <pre className="code-content">
            <code>{usageCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};