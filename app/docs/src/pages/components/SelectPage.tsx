import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Select } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Select } from "l3ui";`;

const usageCode = `
function MyComponent() {
  return (
    <Select.Root>
      <Select.Trigger>Select a fruit</Select.Trigger>
      <Select.List>
        <Select.Option value="apple">Apple</Select.Option>
        <Select.Option value="banana">Banana</Select.Option>
        <Select.Option value="orange">Orange</Select.Option>
      </Select.List>
    </Select.Root>
  );
}
  `

// Showcase code examples
const BasicSelectCode = `<Select.Root>
  <Select.Trigger>Select a fruit</Select.Trigger>
  <Select.List>
    <Select.Option value="apple">Apple</Select.Option>
    <Select.Option value="banana">Banana</Select.Option>
    <Select.Option value="orange">Orange</Select.Option>
  </Select.List>
</Select.Root>`;

const DefaultValueCode = `<Select.Root value="banana">
  <Select.Trigger>Select a fruit</Select.Trigger>
  <Select.List>
    <Select.Option value="apple">Apple</Select.Option>
    <Select.Option value="banana">Banana</Select.Option>
    <Select.Option value="orange">Orange</Select.Option>
  </Select.List>
</Select.Root>`;

const UnstyledSelectCode = `<Select.Root unstyled>
  <Select.Trigger>Select an option</Select.Trigger>
  <Select.List>
    <Select.Option value="one">Option One</Select.Option>
    <Select.Option value="two">Option Two</Select.Option>
    <Select.Option value="three">Option Three</Select.Option>
  </Select.List>
</Select.Root>`;

const selectProps = [
  {
    prop: "value",
    type: "string",
    default: "-",
    description: "The current selected value of the select component",
  },
  {
    prop: "onChange",
    type: "(value: string) => void",
    default: "-",
    description: "Callback invoked when the selected value changes",
  },
  {
    prop: "unstyled",
    type: "boolean",
    default: "false",
    description: "Removes default styles for custom styling",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const SelectPage = () => {
  return (
    <ComponentPage
      title="Select"
      description="A customizable select dropdown component with options and trigger button."
    >
      {/* Installation Section */}
      <InstallSection componentName="Select" importCode={importCode} usageCode={usageCode} />

      {/* Basic Select */}
      <ComponentPage.Section
        title="Basic Select"
        description="A simple dropdown with a trigger and a list of options"
      >
        <Showcase title="Select Options" code={BasicSelectCode} centered>
          <Select.Root>
            <Select.Trigger>Select a fruit</Select.Trigger>
            <Select.List>
              <Select.Option value="apple">Apple</Select.Option>
              <Select.Option value="banana">Banana</Select.Option>
              <Select.Option value="orange">Orange</Select.Option>
            </Select.List>
          </Select.Root>
        </Showcase>
      </ComponentPage.Section>

      {/* Default Value */}
      <ComponentPage.Section
        title="Default Value"
        description="Set a default selected value"
      >
        <Showcase title="Select with Default Value" code={DefaultValueCode} centered>
          <Select.Root value="banana">
            <Select.Trigger>Select a fruit</Select.Trigger>
            <Select.List>
              <Select.Option value="apple">Apple</Select.Option>
              <Select.Option value="banana">Banana</Select.Option>
              <Select.Option value="orange">Orange</Select.Option>
            </Select.List>
          </Select.Root>
        </Showcase>
      </ComponentPage.Section>

      {/* Unstyled */}
      {/* <ComponentPage.Section
        title="Unstyled Select"
        description="Remove default styles to provide your own custom styling"
      >
        <Showcase title="Unstyled Select" code={UnstyledSelectCode} centered>
          <Select.Root unstyled>
            <Select.Trigger>Select an option</Select.Trigger>
            <Select.List>
              <Select.Option value="one">Option One</Select.Option>
              <Select.Option value="two">Option Two</Select.Option>
              <Select.Option value="three">Option Three</Select.Option>
            </Select.List>
          </Select.Root>
        </Showcase>
      </ComponentPage.Section> */}

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference"
        description="Props and types for Select component"
      >
        <PropsTable data={selectProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default SelectPage;
