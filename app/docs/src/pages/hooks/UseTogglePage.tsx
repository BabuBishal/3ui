import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Button } from "l3ui";
import { useToggle } from "l3ui";

const importCode = `import { useToggle } from "l3ui";`;

const usageCode = `function MyComponent() {
  const [isOn, toggle] = useToggle(false);
  
  return (
    <div>
      <p>State: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}`;

const toggleCode = `const [isOn, toggle] = useToggle(false);

return (
  <div>
    <p>{isOn ? "ON" : "OFF"}</p>
    <button onClick={toggle}>Toggle</button>
  </div>
);`;

const toggleProps = [
  {
    prop: "initialValue",
    type: "boolean",
    default: "false",
    description: "Initial boolean value for the toggle",
  },
  {
    prop: "returns",
    type: "[boolean, () => void]",
    default: "-",
    description: "Tuple of current value and a toggle function",
  },
];

const UseTogglePage = () => {
  function Demo() {
    const [isOn, toggle] = useToggle(false);
    return (
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div>{isOn ? "ON" : "OFF"}</div>
        <Button variant="primary" onClick={toggle}>
          Toggle
        </Button>
      </div>
    );
  }

  return (
    <ComponentPage title="useToggle" description="A small hook that returns a boolean state and a function to toggle it.">
      <InstallSection componentName="useToggle" importCode={importCode} usageCode={usageCode} />

      <ComponentPage.Section title="Basic usage" description="Create simple boolean toggles">
        <Showcase title="useToggle" description="Basic toggle usage" code={toggleCode} centered>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Hook signature and return value">
        <PropsTable data={toggleProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseTogglePage;
