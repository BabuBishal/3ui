import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Button, Table } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const ButtonVariantCode = `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Danger</Button>`;

const ButtonSizeCode = `<Button variant="primary" size="lg">Large</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="sm">Small</Button>`;

const ButtonStatesCode = `<Button variant="primary" disabled>
  Disabled
</Button>
<Button 
  variant="primary" 
  onClick={() => alert('Clicked!')}
>
  Click Me
</Button>`;

const ButtonLoadingCode = `function LoadingButton() {
  const [loading, setLoading] = useState(false);
  
  return (
    <Button
      variant="primary"
      disabled={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    >
      {loading ? 'Loading...' : 'Click Me'}
    </Button>
  );
}`;

const buttonProps = [
  {
    prop: "variant",
    type: `"primary" | "secondary" | "outline" | "danger"`,
    default: `"primary"`,
    description: "Visual style variant",
  },
  {
    prop: "size",
    type: `"sm" | "md" | "lg"`,
    default: `"md"`,
    description: "Button size",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the button",
  },
  {
    prop: "onClick",
    type: "() => void",
    default: "-",
    description: "Click event handler",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];


const importCode = `import { Button } from "l3ui";`;

const usageCode = `function MyComponent() {
  return (
    <Button 
      variant="primary" 
      size="md"
      onClick={() => console.log('Clicked!')}
    >
      Click me
    </Button>
  );
}`;

const ButtonPage = () => {
  return (
    <ComponentPage
      title="Button"
      description="A versatile button component with multiple variants, sizes, and states for various use cases."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Button"
        importCode={importCode}
        usageCode={usageCode}
      />

      <ComponentPage.Section
        title="Variants"
        description="Different visual styles for various use cases"
      >
        <Showcase
          title="Button Variants"
          description="Choose from primary, secondary, outline, and danger styles"
          code={ButtonVariantCode}
          centered
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section
        title="Sizes"
        description="Available size options"
      >
        <Showcase
          title="Button Sizes"
          description="Small, medium, and large sizes to fit your design"
          code={ButtonSizeCode}
          centered
        >
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="sm">Small</Button>
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section
        title="States & Events"
        description="Button states and click handlers"
      >
        <Showcase
          title="Interactive Buttons"
          description="Disabled state and click events"
          code={ButtonStatesCode}
          centered
        >
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" onClick={() => alert('Clicked!')}>
            Click Me
          </Button>
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference"
        description="Component props and types"
      >
        <PropsTable data={buttonProps} />

      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default ButtonPage;