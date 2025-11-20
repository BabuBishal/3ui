import { useState } from "react";
import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Textarea } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Textarea } from "l3ui";`;

const usageCode = `
function MyComponent() {
  return (
    <Textarea initialValue="" placeholder="Enter your message">
      <Textarea.Label>Message</Textarea.Label>
      <Textarea.Field />
    </Textarea>
  );
}
`;

// Showcase codes
const BasicTextareaCode = `<Textarea placeholder="Enter your comment">
  <Textarea.Label>Comment</Textarea.Label>
  <Textarea.Field />
</Textarea>`;

const TextareaWithRowsCode = `<Textarea placeholder="Enter a long description">
  <Textarea.Label>Description</Textarea.Label>
  <Textarea.Field rows={6} />
</Textarea>`;

const DisabledTextareaCode = `<Textarea 
  initialValue="This textarea is disabled" 
  disabled
>
  <Textarea.Label>Disabled Message</Textarea.Label>
  <Textarea.Field />
</Textarea>`;

const ControlledTextareaCode = `function ControlledTextarea() {
  const [value, setValue] = useState("");

  return (
    <>
      <Textarea 
        initialValue={value}
        placeholder="Type something..."
      >
        <Textarea.Label>Your Text</Textarea.Label>
        <Textarea.Field />
      </Textarea>
      <p>Characters: {value.length}</p>
    </>
  );
}`;

const TextareaDefaultCode = `<Textarea initialValue="Pre-filled content">
  <Textarea.Label>Pre-filled Text</Textarea.Label>
  <Textarea.Field />
</Textarea>`;

const textareaProps = [
  {
    prop: "initialValue",
    type: "string",
    default: `""`,
    description: "Initial value of the textarea",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the textarea",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for wrapper",
  },
];

const textareaFieldProps = [
  {
    prop: "placeholder",
    type: "string",
    default: "-",
    description: "Placeholder text shown in the textarea",
  },
  {
    prop: "rows",
    type: "number",
    default: "4",
    description: "Number of visible text rows",
  },
  {
    prop: "cols",
    type: "number",
    default: "-",
    description: "Width of the textarea in characters",
  },
  {
    prop: "maxLength",
    type: "number",
    default: "-",
    description: "Maximum number of characters allowed",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const textareaLabelProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Label text or content",
  },
  {
    prop: "htmlFor",
    type: "string",
    default: "-",
    description: "ID to associate label with textarea",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const TextareaPage = () => {
  const [controlledValue, setControlledValue] = useState("");

  return (
    <ComponentPage
      title="Textarea"
      description="A flexible textarea component with compound architecture for labels, error messages, and custom layouts."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Textarea"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Textarea */}
      <ComponentPage.Section
        title="Basic Textarea"
        description="Standard textarea with label"
      >
        <Showcase
          title="Basic Textarea"
          description="A simple textarea for user input"
          code={BasicTextareaCode}
          centered
        >
          <Textarea placeholder="Enter your comment">
            <Textarea.Label >Comment</Textarea.Label>
            <Textarea.Field />
          </Textarea>
        </Showcase>
      </ComponentPage.Section>

      {/* Textarea with Custom Rows */}
      <ComponentPage.Section
        title="Custom Rows"
        description="Control the height with custom row count"
      >
        <Showcase
          title="Textarea with More Rows"
          description="Increased visible area with rows prop"
          code={TextareaWithRowsCode}
          centered
        >
          <Textarea placeholder="Enter a long description">
            <Textarea.Label>Description</Textarea.Label>
            <Textarea.Field rows={6} />
          </Textarea>
        </Showcase>
      </ComponentPage.Section>

      {/* Disabled State */}
      <ComponentPage.Section
        title="Disabled State"
        description="Disabled textarea cannot be edited"
      >
        <Showcase
          title="Disabled Textarea"
          description="A disabled textarea is read-only"
          code={DisabledTextareaCode}
          centered
        >
          <Textarea 
            initialValue="This textarea is disabled" 
            disabled
          >
            <Textarea.Label>Disabled Message</Textarea.Label>
            <Textarea.Field />
          </Textarea>
        </Showcase>
      </ComponentPage.Section>

      {/* Pre-filled Content */}
      <ComponentPage.Section
        title="Pre-filled Content"
        description="Initialize textarea with default text"
      >
        <Showcase
          title="Pre-filled Textarea"
          description="Using initialValue to set default content"
          code={TextareaDefaultCode}
          centered
        >
          <Textarea initialValue="Pre-filled content">
            <Textarea.Label>Pre-filled Text</Textarea.Label>
            <Textarea.Field />
          </Textarea>
        </Showcase>
      </ComponentPage.Section>

      {/* Controlled State */}
      <ComponentPage.Section
        title="Controlled State"
        description="Manage textarea value with React state"
      >
        <Showcase
          title="Character Counter"
          description="Controlled textarea with character count"
          code={ControlledTextareaCode}
          centered
        >
          <Textarea 
            initialValue={controlledValue}
            placeholder="Type something..."
          >
            <Textarea.Label>Your Text</Textarea.Label>
            <Textarea.Field />
          </Textarea>
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
            Characters: {controlledValue.length}
          </p>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference - Root */}
      <ComponentPage.Section
        title="API Reference - Textarea Root"
        description="Main Textarea component props"
      >
        <PropsTable data={textareaProps} />
      </ComponentPage.Section>

      {/* API Reference - Field */}
      <ComponentPage.Section
        title="API Reference - Textarea.Field"
        description="Textarea input field props"
      >
        <PropsTable data={textareaFieldProps} />
      </ComponentPage.Section>

      {/* API Reference - Label */}
      <ComponentPage.Section
        title="API Reference - Textarea.Label"
        description="Textarea label component props"
      >
        <PropsTable data={textareaLabelProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default TextareaPage;
