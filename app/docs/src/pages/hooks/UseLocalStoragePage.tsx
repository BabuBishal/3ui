import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useState } from "react";
import { Button } from "l3ui";
import { useLocalStorage } from "l3ui";

const importCode = `import { useLocalStorage } from "l3ui";`;

const usageCode = `function MyComponent() {
  const [value, setValue] = useLocalStorage<string>("my-key", "default");

  return (
    <input value={value} onChange={(e) => setValue(e.target.value)} />
  );
}`;

const usageCodeExample = `const [value, setValue] = useLocalStorage<string>("my-key", "default");

return (
  <input value={value} onChange={(e) => setValue(e.target.value)} />
);
`;

const props = [
  { prop: "key", type: "string", default: "-", description: "localStorage key" },
  { prop: "initialValue", type: "T", default: "-", description: "Initial value when key is missing" },
  { prop: "returns", type: "[T, (v:T| (prev:T)=>T) => void]", default: "-", description: "Value and setter" },
];

const UseLocalStoragePage = () => {
  function Demo() {
    const [value, setValue] = useLocalStorage<string>("docs-example", "hello");
    const [input, setInput] = useState(value || "");

    const handleSave = () => setValue(input);
    const handleClear = () => {
      setValue("");
      setInput("");
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Enter value"
          />
          <Button variant="primary" onClick={handleSave}>
            Add to Storage
          </Button>
          <Button variant="danger" onClick={handleClear}>
            Remove
          </Button>
        </div>
        <div>Current value: <strong>{value || "(empty)"}</strong></div>
      </div>
    );
  }

  return (
    <ComponentPage title="useLocalStorage" description="Hook for persisting state to localStorage">
      <InstallSection componentName="useLocalStorage" importCode={importCode} usageCode={usageCode} />

      <ComponentPage.Section title="Basic usage" description="Store and read a value from localStorage">
        <Showcase title="useLocalStorage" description="Persist a value to localStorage" code={usageCodeExample} centered>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Arguments and return value">
        <PropsTable data={props} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseLocalStoragePage;
