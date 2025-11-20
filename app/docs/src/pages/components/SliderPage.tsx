import { useState } from "react";
import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Slider } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Slider } from "l3ui";`;

const usageCode = `
function MyComponent() {
  return (
    <Slider id="volume" initialValue={50} min={0} max={100}>
      <Slider.Label>Volume</Slider.Label>
      <Slider.Field />
    </Slider>
  );
}
`;

// Showcase codes
const BasicSliderCode = `<Slider id="brightness" initialValue={50} min={0} max={100}>
  <Slider.Label>Brightness</Slider.Label>
  <Slider.Field />
</Slider>`;

const RangeSliderCode = `<Slider id="price" initialValue={50} min={0} max={1000}>
  <Slider.Label>Price Range</Slider.Label>
  <Slider.Field />
</Slider>`;

const SliderWithStepCode = `<Slider id="volume" initialValue={5} min={0} max={10}>
  <Slider.Label>Volume Level</Slider.Label>
  <Slider.Field step={1} />
</Slider>`;

const DisabledSliderCode = `<Slider 
  id="disabled" 
  initialValue={50} 
  min={0} 
  max={100}
  disabled
>
  <Slider.Label>Disabled Slider</Slider.Label>
  <Slider.Field />
</Slider>`;

const SliderWithCustomLabelCode = `function CustomLabelSlider() {
  const [value, setValue] = useState(50);
  
  return (
    <Slider 
      id="custom" 
      initialValue={50} 
      min={0} 
      max={100}
    >
      <Slider.Label showValue={true}>
        Opacity: 
      </Slider.Label>
      <Slider.Field onChange={setValue} />
    </Slider>
  );
}`;

const sliderProps = [
  {
    prop: "id",
    type: "string",
    default: "-",
    description: "Unique identifier for the slider",
  },
  {
    prop: "initialValue",
    type: "number",
    default: "50",
    description: "Initial value of the slider",
  },
  {
    prop: "min",
    type: "number",
    default: "0",
    description: "Minimum slider value",
  },
  {
    prop: "max",
    type: "number",
    default: "100",
    description: "Maximum slider value",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the slider",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const sliderFieldProps = [
  {
    prop: "step",
    type: "number",
    default: "1",
    description: "Step size for slider increments",
  },
  {
    prop: "placeholder",
    type: "string",
    default: "-",
    description: "Placeholder text",
  },
  {
    prop: "onChange",
    type: "(value: number) => void",
    default: "-",
    description: "Callback when slider value changes",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const SliderPage = () => {
  return (
    <ComponentPage
      title="Slider"
      description="A range slider component with compound components for flexible layouts and customization."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Slider"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Slider */}
      <ComponentPage.Section
        title="Basic Slider"
        description="Standard slider with label and field"
      >
        <Showcase
          title="Basic Slider"
          description="A simple brightness slider from 0 to 100"
          code={BasicSliderCode}
          centered
        >
          <Slider id="brightness" initialValue={50} min={0} max={100}>
            <Slider.Label>Brightness</Slider.Label>
            <Slider.Field />
          </Slider>
        </Showcase>
      </ComponentPage.Section>

      {/* Range Slider */}
      <ComponentPage.Section
        title="Custom Range"
        description="Slider with custom min and max values"
      >
        <Showcase
          title="Price Range Slider"
          description="A slider for setting prices from 0 to 1000"
          code={RangeSliderCode}
          centered
        >
          <Slider id="price" initialValue={50} min={0} max={1000}>
            <Slider.Label>Price Range</Slider.Label>
            <Slider.Field />
          </Slider>
        </Showcase>
      </ComponentPage.Section>

      {/* Slider with Step */}
      <ComponentPage.Section
        title="Slider with Step"
        description="Control increment steps for precision"
      >
        <Showcase
          title="Volume Level Slider"
          description="A slider with step increments of 1 from 0 to 10"
          code={SliderWithStepCode}
          centered
        >
          <Slider id="volume" initialValue={5} min={0} max={10}>
            <Slider.Label>Volume Level</Slider.Label>
            <Slider.Field step={1} />
          </Slider>
        </Showcase>
      </ComponentPage.Section>

      {/* Disabled Slider */}
      <ComponentPage.Section
        title="Disabled State"
        description="Disabled slider cannot be interacted with"
      >
        <Showcase
          title="Disabled Slider"
          description="A slider in disabled state"
          code={DisabledSliderCode}
          centered
        >
          <Slider 
            id="disabled" 
            initialValue={50} 
            min={0} 
            max={100}
            disabled
          >
            <Slider.Label>Disabled Slider</Slider.Label>
            <Slider.Field />
          </Slider>
        </Showcase>
      </ComponentPage.Section>

      {/* Slider with Custom Label */}
      <ComponentPage.Section
        title="Custom Label"
        description="Customize label display with value"
      >
        <Showcase
          title="Custom Label Slider"
          description="Label with dynamic value display"
          code={SliderWithCustomLabelCode}
          centered
        >
          <Slider 
            id="custom" 
            initialValue={50} 
            min={0} 
            max={100}
          >
            <Slider.Label showValue={true}>
              Opacity: 
            </Slider.Label>
            <Slider.Field />
          </Slider>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference - Slider Root"
        description="Slider component props and types"
      >
        <PropsTable data={sliderProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Slider.Field"
        description="Slider field component props"
      >
        <PropsTable data={sliderFieldProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default SliderPage;
