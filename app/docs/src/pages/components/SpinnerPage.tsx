
import { Spinner } from "l3ui";
import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const SpinnerSizeCode = `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`;

const SpinnerWithLabelCode = `<Spinner size="md">Loading...</Spinner>`;

const SpinnerCustomCode = `<Spinner size="lg" color="#ff6b6b" speed={0.5}>
  Please wait...
</Spinner>`;


export const spinnerProps = [
  {
    prop: "size",
    type: `'sm' | 'md' | 'lg' | 'xl' | number | string`,
    default: `'md'`,
    description:
      "Sets the size of the spinner. Can be a predefined size or a custom value in pixels or other CSS units.",
  },
  {
    prop: "color",
    type: "string",
    default: `'#2563eb'`,
    description:
      "Sets the color of the spinner. Accepts any valid CSS color value.",
  },
  {
    prop: "speed",
    type: "number",
    default: `1`,
    description:
      "Controls the speed of the spinner animation. Higher values result in faster spinning.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    default: `null`,
    description:
      "Optional label or content to display below the spinner.",
  },
];


const importCode = `import { Spinner } from "l3ui";`;

const usageCode = `function MyComponent() {
  return (
    <Spinner />
  );
}`;

const SpinnerPage = () => {
  return (
    <ComponentPage
      title="Spinner"
      description="An animated loading spinner component for indicating loading states."
    >

       <InstallSection
              componentName="Spinner"
              importCode={importCode}
              usageCode={usageCode}
            />
       <ComponentPage.Section
        title="Default"
        description="Default spinner component"
      >
          <Showcase
                    title="Spinner"
                    description="Basic usage of the Spinner component"
                    code={`<Spinner />`}
                    centered
                  >
                   <Spinner  />
                  </Showcase>
          
      </ComponentPage.Section>
      <ComponentPage.Section
        title="Sizes"
        description="Available spinner sizes"
      >
          <Showcase
                    title="Spinner Sizes"
                    description="Choose from sm, md, lg, and xl sizes"
                    code={SpinnerSizeCode}
                    centered
                  >
                   <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
                  </Showcase>
          
      </ComponentPage.Section>

      <ComponentPage.Section
        title="With Label"
        description="Add a label below the spinner"
      >
        <Showcase title="Labeled Spinner" description="Display text below the spinner" code={SpinnerWithLabelCode} centered>
            <Spinner size="md">Loading...</Spinner>
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section
        title="Customization"
        description="Customize color and speed"
      >
        <Showcase title="Custom Spinner" description="Change color and animation speed" code={SpinnerCustomCode} centered>
            <Spinner size="lg" color="#ff6b6b" speed={0.5}>
              Please wait...
            </Spinner>
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference"
        description="Component props and types"
      >
       <PropsTable data={spinnerProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default SpinnerPage;