import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Input } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Input } from "l3ui";`;
const usageCode = `
function MyComponent() {
  return (
    <Input id="username" placeholder="Enter username">
      <Input.Label>Username</Input.Label>
      <Input.Field />
    </Input>
  );
}
  `
// Showcase codes
const BasicInputCode = `<Input id="username" placeholder="Enter username">
  <Input.Label>Username</Input.Label>
  <Input.Field />
</Input>
<Input id="email" placeholder="Enter email" >
  <Input.Label>Email</Input.Label>
  <Input.Field />
</Input>`;

const DisabledInputCode = `<Input id="email" placeholder="Enter email" disabled>
  <Input.Label>Email</Input.Label>
  <Input.Field />
</Input>`;

const InputErrorCode = `<Input id="password" placeholder="Enter password">
  <Input.Label>Password</Input.Label>
  <Input.Field />
  <Input.Error>Password must be at least 6 characters</Input.Error>
</Input>`;

const inputProps = [
  {
    prop: "id",
    type: "string",
    default: "-",
    description: "Unique ID for the input and label association",
  },
  {
    prop: "initialValue",
    type: "string",
    default: `""`,
    description: "Initial value of the input field",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input field",
  },
  {
    prop: "placeholder",
    type: "string",
    default: "-",
    description: "Placeholder text shown inside the input",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const InputPage = () => {
  return (
    <ComponentPage
      title="Input"
      description="Controlled input component with label, error, and disabled states."
    >
      {/* Installation */}
      <InstallSection componentName="Input" importCode={importCode} usageCode={usageCode}/>

      {/* Basic Input */}
      <ComponentPage.Section
        title="Basic Input"
        description="Standard input with label"
      >
        <Showcase title="Username Input" code={BasicInputCode} centered>
          <Input id="username" placeholder="Enter username">
            <Input.Label>Username</Input.Label>
            <Input.Field />
          </Input>
          <Input id="email" placeholder="Enter email" >
  <Input.Label>Email</Input.Label>
  <Input.Field />
</Input>
        </Showcase>
      </ComponentPage.Section>

      {/* Disabled Input */}
      <ComponentPage.Section
        title="Disabled Input"
        description="Disabled input cannot be edited"
      >
        <Showcase title="Disabled Email Input" code={DisabledInputCode} centered>
          <Input id="email" placeholder="Enter email" disabled>
            <Input.Label>Email</Input.Label>
            <Input.Field />
          </Input>
        </Showcase>
      </ComponentPage.Section>

      {/* Input with Error */}
      <ComponentPage.Section
        title="Input with Error"
        description="Displays an error message below the input"
      >
        <Showcase title="Password Input with Error" code={InputErrorCode} centered>
          <Input id="password" placeholder="Enter password">
            <Input.Label>Password</Input.Label>
            <Input.Field />
            <Input.Error>Password must be at least 6 characters</Input.Error>
          </Input>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference"
        description="Component props and types"
      >
        <PropsTable data={inputProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default InputPage;
