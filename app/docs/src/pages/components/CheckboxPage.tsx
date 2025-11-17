import { useState } from "react";
import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Checkbox } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Checkbox } from "l3ui";`;

const usageCode = `
function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="Accept terms and conditions"
    />
  );
}
`;

// Showcase codes
const BasicCheckboxCode = `<Checkbox 
  label="Remember me" 
  defaultChecked={false} 
/>
<Checkbox 
  label="Subscribe to updates" 
  defaultChecked={false} 
/>`;

const CheckedCheckboxCode = `<Checkbox 
  label="Checked by default" 
  defaultChecked={true} 
/>`;

const DisabledCheckboxCode = `<Checkbox 
  label="Disabled unchecked" 
  disabled 
/>
<Checkbox 
  label="Disabled checked" 
  defaultChecked={true}
  disabled 
/>`;

const ControlledCheckboxCode = `function ControlledCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Controlled checkbox"
      />
      <p>Current state: {checked ? "Checked" : "Unchecked"}</p>
    </>
  );
}`;

const UnstyledCheckboxCode = `<Checkbox 
  unstyled 
  className="custom-checkbox"
  label="Custom styled" 
/>

<style>
  .custom-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #374151;
  }
</style>`;

const checkboxProps = [
  {
    prop: "checked",
    type: "boolean",
    default: "-",
    description: "Controlled state for the checkbox",
  },
  {
    prop: "onChange",
    type: "(e: ChangeEvent<HTMLInputElement>) => void",
    default: "-",
    description: "Change event handler",
  },
  {
    prop: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Uncontrolled initial state",
  },
  {
    prop: "label",
    type: "ReactNode",
    default: "-",
    description: "Label text or element displayed next to checkbox",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the checkbox",
  },
  {
    prop: "unstyled",
    type: "boolean",
    default: "false",
    description: "Removes all default styles",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const CheckboxPage = () => {
  const [controlledChecked, setControlledChecked] = useState(false);

  return (
    <ComponentPage
      title="Checkbox"
      description="A flexible checkbox component for form inputs with support for controlled and uncontrolled states."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Checkbox"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Checkbox */}
      <ComponentPage.Section
        title="Basic Checkbox"
        description="Standard checkbox with labels"
      >
        <Showcase
          title="Basic Checkboxes"
          description="Simple unchecked checkboxes with labels"
          code={BasicCheckboxCode}
          centered
        >
          <Checkbox label="Remember me" defaultChecked={false} />
          <Checkbox label="Subscribe to updates" defaultChecked={false} />
        </Showcase>
      </ComponentPage.Section>

      {/* Checked State */}
      <ComponentPage.Section
        title="Checked State"
        description="Checkboxes with default checked state"
      >
        <Showcase
          title="Checked by Default"
          description="Using defaultChecked to set initial state"
          code={CheckedCheckboxCode}
          centered
        >
          <Checkbox label="Checked by default" defaultChecked={true} />
        </Showcase>
      </ComponentPage.Section>

      {/* Disabled State */}
      <ComponentPage.Section
        title="Disabled State"
        description="Disabled checkboxes in both checked and unchecked states"
      >
        <Showcase
          title="Disabled Checkboxes"
          description="Disabled checkboxes cannot be interacted with"
          code={DisabledCheckboxCode}
          centered
        >
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" defaultChecked={true} disabled />
        </Showcase>
      </ComponentPage.Section>

      {/* Controlled State */}
      <ComponentPage.Section
        title="Controlled State"
        description="Control checkbox state with React state"
      >
        <Showcase
          title="Controlled Checkbox"
          description="Manage checkbox state using useState"
          code={ControlledCheckboxCode}
          centered
        >
          <Checkbox
            checked={controlledChecked}
            onChange={(e) => setControlledChecked(e.target.checked)}
            label="Controlled checkbox"
          />
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
            Current state: {controlledChecked ? "Checked" : "Unchecked"}
          </p>
        </Showcase>
      </ComponentPage.Section>

      {/* Unstyled */}
      <ComponentPage.Section
        title="Unstyled"
        description="Remove default styles for custom styling"
      >
        <Showcase
          title="Custom Styled Checkbox"
          description="Using unstyled prop + your own CSS"
          code={UnstyledCheckboxCode}
          centered
        >
          <Checkbox unstyled className="custom-checkbox" label="Custom styled" />
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference"
        description="Component props and types"
      >
        <PropsTable data={checkboxProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default CheckboxPage;
