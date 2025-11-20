import { useState } from "react";
import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Toggle } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Toggle } from "l3ui";`;

const usageCode = `
function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Toggle.Root checked={isEnabled} onChange={setIsEnabled}>
      <Toggle.Button />
      <Toggle.Label>Enable feature</Toggle.Label>
    </Toggle.Root>
  );
}
`;

// Showcase codes
const BasicToggleCode = `function BasicToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Toggle.Root checked={enabled} onChange={setEnabled}>
      <Toggle.Button />
      <Toggle.Label />
    </Toggle.Root>
  );
}`;

const ToggleWithLabelCode = `function ToggleWithLabel() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Toggle.Root checked={enabled} onChange={setEnabled}>
      <Toggle.Button />
      <Toggle.Label>Dark Mode</Toggle.Label>
    </Toggle.Root>
  );
}`;

const ToggleVariantsCode = `function ToggleVariants() {
  const [primary, setPrimary] = useState(false);
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);
  const [warning, setWarning] = useState(false);

  return (
    <>
      <Toggle.Root variant="primary" checked={primary} onChange={setPrimary}>
        <Toggle.Button />
        <Toggle.Label>Primary</Toggle.Label>
      </Toggle.Root>
      <Toggle.Root variant="success" checked={success} onChange={setSuccess}>
        <Toggle.Button />
        <Toggle.Label>Success</Toggle.Label>
      </Toggle.Root>
      <Toggle.Root variant="danger" checked={danger} onChange={setDanger}>
        <Toggle.Button />
        <Toggle.Label>Danger</Toggle.Label>
      </Toggle.Root>
      <Toggle.Root variant="warning" checked={warning} onChange={setWarning}>
        <Toggle.Button />
        <Toggle.Label>Warning</Toggle.Label>
      </Toggle.Root>
    </>
  );
}`;

const DisabledToggleCode = `<Toggle.Root disabled>
  <Toggle.Button />
  <Toggle.Label>Disabled Off</Toggle.Label>
</Toggle.Root>
<Toggle.Root defaultChecked disabled>
  <Toggle.Button />
  <Toggle.Label>Disabled On</Toggle.Label>
</Toggle.Root>`;

const UncontrolledToggleCode = `<Toggle.Root defaultChecked={false}>
  <Toggle.Button />
  <Toggle.Label />
</Toggle.Root>`;

const toggleRootProps = [
  {
    prop: "checked",
    type: "boolean",
    default: "-",
    description: "Controlled state of the toggle",
  },
  {
    prop: "onChange",
    type: "(checked: boolean) => void",
    default: "-",
    description: "Callback when toggle state changes",
  },
  {
    prop: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Uncontrolled initial state",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the toggle",
  },
  {
    prop: "variant",
    type: `"primary" | "success" | "danger" | "warning"`,
    default: `"primary"`,
    description: "Color variant for the toggle",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const TogglePage = () => {
  const [basicToggle, setBasicToggle] = useState(false);
  const [labelToggle, setLabelToggle] = useState(false);
  const [primaryToggle, setPrimaryToggle] = useState(false);
  const [successToggle, setSuccessToggle] = useState(false);
  const [dangerToggle, setDangerToggle] = useState(false);
  const [warningToggle, setWarningToggle] = useState(false);

  return (
    <ComponentPage
      title="Toggle"
      description="A flexible toggle switch component with multiple variants and support for controlled and uncontrolled states."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Toggle"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Toggle */}
      <ComponentPage.Section
        title="Basic Toggle"
        description="Simple toggle switch"
      >
        <Showcase
          title="Basic Toggle"
          description="A simple toggle with on/off states"
          code={BasicToggleCode}
          centered
        >
          <Toggle.Root checked={basicToggle} onChange={setBasicToggle}>
            <Toggle.Button />
            <Toggle.Label />
          </Toggle.Root>
        </Showcase>
      </ComponentPage.Section>

      {/* Toggle with Label */}
      <ComponentPage.Section
        title="With Label"
        description="Toggle with descriptive label"
      >
        <Showcase
          title="Toggle with Label"
          description="A toggle switch with a meaningful label"
          code={ToggleWithLabelCode}
          centered
        >
          <Toggle.Root checked={labelToggle} onChange={setLabelToggle}>
            <Toggle.Button />
            <Toggle.Label>Dark Mode</Toggle.Label>
          </Toggle.Root>
        </Showcase>
      </ComponentPage.Section>

      {/* Variants */}
      <ComponentPage.Section
        title="Variants"
        description="Different color variants for semantic meaning"
      >
        <Showcase
          title="Toggle Variants"
          description="Primary, success, danger, and warning variants"
          code={ToggleVariantsCode}
          centered
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <Toggle.Root 
              variant="primary" 
              checked={primaryToggle} 
              onChange={setPrimaryToggle}
            >
              <Toggle.Button />
              <Toggle.Label>Primary</Toggle.Label>
            </Toggle.Root>
            <Toggle.Root 
              variant="success" 
              checked={successToggle} 
              onChange={setSuccessToggle}
            >
              <Toggle.Button />
              <Toggle.Label>Success</Toggle.Label>
            </Toggle.Root>
            <Toggle.Root 
              variant="danger" 
              checked={dangerToggle} 
              onChange={setDangerToggle}
            >
              <Toggle.Button />
              <Toggle.Label>Danger</Toggle.Label>
            </Toggle.Root>
            <Toggle.Root 
              variant="warning" 
              checked={warningToggle} 
              onChange={setWarningToggle}
            >
              <Toggle.Button />
              <Toggle.Label>Warning</Toggle.Label>
            </Toggle.Root>
          </div>
        </Showcase>
      </ComponentPage.Section>

      {/* Disabled State */}
      <ComponentPage.Section
        title="Disabled State"
        description="Disabled toggles in both on and off states"
      >
        <Showcase
          title="Disabled Toggles"
          description="Disabled toggles cannot be interacted with"
          code={DisabledToggleCode}
          centered
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <Toggle.Root disabled>
              <Toggle.Button />
              <Toggle.Label>Disabled Off</Toggle.Label>
            </Toggle.Root>
            <Toggle.Root defaultChecked disabled>
              <Toggle.Button />
              <Toggle.Label>Disabled On</Toggle.Label>
            </Toggle.Root>
          </div>
        </Showcase>
      </ComponentPage.Section>

      {/* Uncontrolled */}
      <ComponentPage.Section
        title="Uncontrolled"
        description="Let the component manage its own state"
      >
        <Showcase
          title="Uncontrolled Toggle"
          description="Using defaultChecked for uncontrolled state"
          code={UncontrolledToggleCode}
          centered
        >
          <Toggle.Root defaultChecked={false}>
            <Toggle.Button />
            <Toggle.Label />
          </Toggle.Root>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference - Toggle.Root"
        description="Main toggle component props and types"
      >
        <PropsTable data={toggleRootProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default TogglePage;
