import { useState } from "react";
import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import {
  Input,
  Textarea,
  Checkbox,
  Select,
  Toggle,
  Slider,
} from "l3ui";

const FormElementsPage = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <ComponentPage
      title="Form Elements"
      description="A collection of form components for building user input interfaces."
    >
      {/* Input Section */}
      <ComponentPage.Section
        title="Text Input"
        description="Input fields for text and email"
      >
        <Showcase
          title="Basic Inputs"
          description="Standard text and email input fields"
          code={`<Input id="username" placeholder="Enter username">
  <Input.Label>Username</Input.Label>
  <Input.Field />
</Input>
<Input id="email" placeholder="Enter email" >
  <Input.Label>Email</Input.Label>
  <Input.Field />
</Input>`}
          centered
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Input id="username" placeholder="Enter username">
              <Input.Label>Username</Input.Label>
              <Input.Field />
            </Input>
            <Input id="email" placeholder="Enter email">
              <Input.Label>Email</Input.Label>
              <Input.Field />
            </Input>
          </div>
        </Showcase>
      </ComponentPage.Section>

      {/* Textarea Section */}
      <ComponentPage.Section
        title="Textarea"
        description="Multi-line text input field"
      >
        <Showcase
          title="Basic Textarea"
          description="For collecting longer text input"
          code={`<Textarea initialValue="" placeholder="Enter your message">
  <Textarea.Label>Message</Textarea.Label>
  <Textarea.Field />
</Textarea>`}
          centered
        >
          <Textarea initialValue="" placeholder="Enter your message">
            <Textarea.Label>Message</Textarea.Label>
            <Textarea.Field />
          </Textarea>
        </Showcase>
      </ComponentPage.Section>

      {/* Checkbox Section */}
      <ComponentPage.Section
        title="Checkbox"
        description="Boolean input for selections"
      >
        <Showcase
          title="Basic Checkboxes"
          description="Single and multiple selections"
          code={`<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to the newsletter" />`}
          centered
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Checkbox label="Accept terms and conditions" />
            <Checkbox label="Subscribe to the newsletter" />
          </div>
        </Showcase>
      </ComponentPage.Section>

      {/* Select Section */}
      <ComponentPage.Section
        title="Select"
        description="Dropdown selection component"
      >
        <Showcase
          title="Basic Select"
          description="Choose from a list of options"
          code={`<Select.Root>
  <Select.Trigger>Select a framework</Select.Trigger>
  <Select.List>
    <Select.Option value="react">React</Select.Option>
    <Select.Option value="vue">Vue</Select.Option>
    <Select.Option value="angular">Angular</Select.Option>
  </Select.List>
</Select.Root>`}
          centered
        >
          <Select.Root>
            <Select.Trigger>Select a framework</Select.Trigger>
            <Select.List>
              <Select.Option value="react">React</Select.Option>
              <Select.Option value="vue">Vue</Select.Option>
              <Select.Option value="angular">Angular</Select.Option>
            </Select.List>
          </Select.Root>
        </Showcase>
      </ComponentPage.Section>

      {/* Toggle Section */}
      <ComponentPage.Section
        title="Toggle"
        description="Switch component for on/off states"
      >
        <Showcase
          title="Basic Toggle"
          description="Switch between two states"
          code={`<Toggle.Root>
  <Toggle.Button />
  <Toggle.Label>Enable notifications</Toggle.Label>
</Toggle.Root>`}
          centered
        >
          <Toggle.Root checked={toggleState} onChange={setToggleState}>
            <Toggle.Button />
            <Toggle.Label>Enable notifications</Toggle.Label>
          </Toggle.Root>
        </Showcase>
      </ComponentPage.Section>

      {/* Slider Section */}
      <ComponentPage.Section
        title="Slider"
        description="Range input component"
      >
        <Showcase
          title="Basic Slider"
          description="Select a value within a range"
          code={`<Slider id="volume" initialValue={50} min={0} max={100}>
  <Slider.Label>Volume</Slider.Label>
  <Slider.Field />
</Slider>`}
          centered
        >
          <Slider id="volume" initialValue={50} min={0} max={100}>
            <Slider.Label>Volume</Slider.Label>
            <Slider.Field />
          </Slider>
        </Showcase>
      </ComponentPage.Section>

      {/* Complete Form Example */}
      <ComponentPage.Section
        title="Complete Form Example"
        description="Combining multiple form elements"
      >
        <Showcase
          title="User Registration Form"
          description="Example form using various form elements"
          code={`<form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
  <Input id="username">
    <Input.Label>Username</Input.Label>
    <Input.Field placeholder="Enter username" />
  </Input>
  
  <Input id="email">
    <Input.Label>Email</Input.Label>
    <Input.Field placeholder="Enter email" type="email" />
  </Input>
  
  <Textarea initialValue="">
    <Textarea.Label>Bio</Textarea.Label>
    <Textarea.Field rows={4} placeholder="Tell us about yourself" />
  </Textarea>
  
  <Checkbox label="I agree to the terms and conditions" />
  <Checkbox label="Subscribe to updates" />
  
  <Toggle.Root>
    <Toggle.Button />
    <Toggle.Label>Enable two-factor authentication</Toggle.Label>
  </Toggle.Root>
  
  <button type="submit">Register</button>
</form>`}
          centered
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "400px",
            }}
          >
            <Input id="username">
              <Input.Label>Username</Input.Label>
              <Input.Field placeholder="Enter username" />
            </Input>

            <Input id="email">
              <Input.Label>Email</Input.Label>
              <Input.Field placeholder="Enter email" type="email" />
            </Input>

            <Textarea initialValue="">
              <Textarea.Label>Bio</Textarea.Label>
              <Textarea.Field rows={4} placeholder="Tell us about yourself" />
            </Textarea>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Checkbox label="I agree to the terms and conditions" />
              <Checkbox label="Subscribe to updates" />
            </div>

            <Toggle.Root>
              <Toggle.Button />
              <Toggle.Label>Enable two-factor authentication</Toggle.Label>
            </Toggle.Root>

            <button
              type="submit"
              style={{
                padding: "0.75rem 1rem",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Register
            </button>
          </form>
        </Showcase>
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default FormElementsPage;
