
import {CodeBlock} from "../CodeBlock/CodeBlock";
import { CommandTab } from "../CommandTab/CommandTab";
import { Step } from "../Step/Step";
import "./InstallSection.css";

export const InstallSection = ({ componentName, importCode, usageCode }) => {
  return (
    <div className="install-section">
      <div className="install-header">
        <h2 className="install-title">Installation & Usage</h2>
        <p className="install-subtitle">
          Get started with {componentName} in your project
        </p>
      </div>

      {/* Step 1 */}
      <Step
        number={1}
        title="Install the library"
        description="Choose your preferred package manager"
      >
        <div className="command-tabs">
          <CommandTab label="npm" command="npm install l3ui" />
          <CommandTab label="yarn" command="yarn add l3ui" />
          <CommandTab label="pnpm" command="pnpm add l3ui" />
        </div>
      </Step>

      {/* Step 2 */}
      <Step
        number={2}
        title="Import the component"
        description="Add the import statement to your file"
      >
        <CodeBlock code={importCode} language="TypeScript" />
      </Step>

      {/* Step 3 */}
      <Step
        number={3}
        title="Use in your component"
        description={`Start using ${componentName} in your React components`}
      >
        <CodeBlock code={usageCode} language="TypeScript" />
      </Step>
    </div>
  );
};
