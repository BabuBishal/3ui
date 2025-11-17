import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useState } from "react";
import { Button , useCopyToClipboard} from "l3ui";

const importCode = `import { useCopyToClipboard } from "l3ui";`;

const usageCode = `function MyComponent() {
  const { copiedText, copy } = useCopyToClipboard();
  
  return (
    <button onClick={() => copy("Hello!")}>
      {copiedText ? "Copied!" : "Copy"}
    </button>
  );
}`;

const copyCode = `const [text, setText] = useState('Copy me');
const { copiedText, copy } = useCopyToClipboard();

return (
  <div>
    <input value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={() => copy(text)}>
      {copiedText === text ? 'Copied!' : 'Copy'}
    </button>
  </div>
);`;

const copyProps = [
  { prop: "returns", type: "{ copiedText: string danger| null, copy: (text: string) => void }", default: "-", description: "Object containing last copied text and copy function" },
];

const CopyToClipboardPage = () => {
  function Demo() {
    const [text, setText] = useState("Copy this text!");
    const { copiedText, copy } = useCopyToClipboard();
    return (
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "8px 12px",
            border: "1px solid var(--ui-border)",
            borderRadius: "4px",
            fontSize: "14px",
            fontFamily: "inherit",
            backgroundColor: "var(--ui-background)",
            color: "var(--ui-text-primary)",
            transition: "border-color 0.2s"
          }}
        />
        <Button variant="primary" onClick={() => copy(text)}>
          {copiedText === text ? "Copied!" : "Copy"}
        </Button>
      </div>
    );
  }

  return (
    <ComponentPage title="useCopyToClipboard" description="A hook to copy text to the clipboard and track the last copied value.">
      <InstallSection componentName="useCopyToClipboard" importCode={importCode} usageCode={usageCode} />

      <ComponentPage.Section title="Basic usage" description="Copy any text programmatically or from user input">
        <Showcase title="useCopyToClipboard" description="Copy text and track last copied value" code={copyCode} centered>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Return value and shape">
        <PropsTable data={copyProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default CopyToClipboardPage;
