import "./Installation.css";
import ItemsList from "../shared/components/ItemsList/ItemsList";
import FAQ from "../shared/components/FAQ/FAQ";
import NextSteps from "../shared/components/NextSteps/NextSteps";
import { CodeBlock } from "../shared/components/CodeBlock/CodeBlock";
import { CommandTab } from "../shared/components/CommandTab/CommandTab";
import { componentItems, faqItems, hooksData } from "../constants/constants";


const InstallationPage = () => {
  return (
    <div className="installation-page">
      <section className="installation-hero">
        <h1>Installation & Setup</h1>
        <p>Get started with l3UI in just a few steps</p>
      </section>

      <section className="installation-section">
        <h2>Step 1: Install the Package</h2>
        <p>Choose your preferred package manager to install l3UI:</p>
<div className="command-tabs">
          <CommandTab label="npm" command="npm install l3ui" />
          <CommandTab label="yarn" command="yarn add l3ui" />
          <CommandTab label="pnpm" command="pnpm add l3ui" />
        </div>      </section>

      

      <section className="installation-section">
        <h2>Step 2: Import and Use Components</h2>
        <p>Import components directly from the l3UI package:</p>
        <CodeBlock
          code={`import { Button, Input, Badge, useToast } from "l3ui";

function MyComponent() {
  const { notify } = useToast();

  return (
    <div>
      <Button 
        variant="primary" 
        onClick={() => notify({
          title: "Success!",
          description: "Welcome to 3UI",
          type: "success"
        })}
      >
        Click Me
      </Button>
      <Input id="email" placeholder="Enter email">
        <Input.Label>Email</Input.Label>
        <Input.Field />
      </Input>
      <Badge variant="success">Active</Badge>
    </div>
  );
}`}
        />
      </section>

      <section className="installation-section">
        <h2>Step 3: Customize CSS Variables (Optional)</h2>
        <p>
          Override theme colors by setting CSS custom properties in your root styles:
        </p>
        <CodeBlock
          code={`/* Light mode */
:root {
  --primary: #2563eb;
  --secondary: #64748b;
  --success: #16a34a;
  --danger: #dc2626;
  --warning: #f59e0b;
  --info: #0ea5e9;
  
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --background: #ffffff;
  --surface: #f9fafb;
  --border: #e5e7eb;
}

/* Dark mode */
[data-theme="dark"] {
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --background: #111827;
  --surface: #1f2937;
  --border: #374151;
}`}
        />
      </section>

      <section className="installation-section">
        <h2>Available Components</h2>
        <p>Here's a quick overview of all available components:</p>
        <ItemsList items={componentItems} />
      </section>

      <section className="installation-section">
        <h2>Available Hooks</h2>
        <p>Useful React hooks for common patterns:</p>
        <ItemsList items={hooksData} />
      </section>

      <section className="installation-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <FAQ faqItems={faqItems} />
      </section>

      <section className="installation-section next-steps">
        <h2>Next Steps</h2>
        <NextSteps />
      </section>
    </div>
  );
};

export default InstallationPage;
