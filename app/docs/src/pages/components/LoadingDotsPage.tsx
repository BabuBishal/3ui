import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { LoadingDots } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { LoadingDots } from "l3ui";`;

const usageCode = `
function MyComponent() {
  return (
    <LoadingDots />     
  );
}
`;

const BasicLoaderCode = `<LoadingDots />`;

const SizesCode = `<div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
  <div>
    <p>Small</p>
    <LoadingDots size="sm" />
  </div>
  <div>
    <p>Medium</p>
    <LoadingDots size="md" />
  </div>
  <div>
    <p>Large</p>
    <LoadingDots size="lg" />
  </div>
</div>`;

const ColorCode = `<div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
  <div>
    <p>Blue</p>
    <LoadingDots color="#3b82f6" />
  </div>
  <div>
    <p>Green</p>
    <LoadingDots color="#10b981" />
  </div>
  <div>
    <p>Red</p>
    <LoadingDots color="#ef4444" />
  </div>
</div>`;

const SpeedCode = `<div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
  <div>
    <p>Slow (2s)</p>
    <LoadingDots speed={2} />
  </div>
  <div>
    <p>Normal (1s)</p>
    <LoadingDots speed={1} />
  </div>
  <div>
    <p>Fast (0.5s)</p>
    <LoadingDots speed={0.5} />
  </div>
</div>`;

const WithLabelCode = `<LoadingDots>
  <LoadingDots.Dot />
  <LoadingDots.Label>Loading...</LoadingDots.Label>
</LoadingDots>`;

const loadingDotsProps = [
  {
    prop: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: "Size of the loading dots",
  },
  {
    prop: "color",
    type: "string",
    default: "var(--ui-text-primary)",
    description: "Color of the dots (hex, rgb, or CSS color)",
  },
  {
    prop: "speed",
    type: "number",
    default: "1",
    description: "Animation speed in seconds",
  },
  {
    prop: "unstyled",
    type: "boolean",
    default: "false",
    description: "Remove default styling",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "<LoadingDots.Dot />",
    description: "Loading dots content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const dotProps = [
  {
    prop: "-",
    type: "-",
    default: "-",
    description: "Renders three animated dots. Uses context from LoadingDots parent.",
  },
];

const labelProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Label text or content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const LoadingDotsPage = () => {
  return (
    <ComponentPage
      title="Loading Dots"
      description="An animated loading dots component with customizable size, color, and speed."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="LoadingDots"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Loader */}
      <ComponentPage.Section
        title="Basic Loading Dots"
        description="Simple animated dots loader"
      >
        <Showcase
          title="Default Loader"
          description="Loading dots with default settings"
          code={BasicLoaderCode}
          centered
        >
          <LoadingDots />
           
        </Showcase>
      </ComponentPage.Section>

      {/* Sizes */}
      <ComponentPage.Section
        title="Sizes"
        description="Different size variations"
      >
        <Showcase
          title="Size Variations"
          description="Small, medium, and large loading dots"
          code={SizesCode}
          centered
        >
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p>Small</p>
              <LoadingDots size="sm" />
              
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Medium</p>
              <LoadingDots size="md">
                <LoadingDots.Dot />
              </LoadingDots>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Large</p>
              <LoadingDots size="lg" />
               
            </div>
          </div>
        </Showcase>
      </ComponentPage.Section>

      {/* Colors */}
      <ComponentPage.Section
        title="Colors"
        description="Different color options"
      >
        <Showcase
          title="Color Variations"
          description="Loading dots with different colors"
          code={ColorCode}
          centered
        >
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p>Blue</p>
              <LoadingDots color="#3b82f6" />
                
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Green</p>
              <LoadingDots color="#10b981" />
                
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Red</p>
              <LoadingDots color="#ef4444" />
                
            </div>
          </div>
        </Showcase>
      </ComponentPage.Section>

      {/* Speed */}
      <ComponentPage.Section
        title="Animation Speed"
        description="Control animation speed"
      >
        <Showcase
          title="Speed Variations"
          description="Fast, normal, and slow animations"
          code={SpeedCode}
          centered
        >
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <p>Slow (2s)</p>
              <LoadingDots speed={2} />
                
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Normal (1s)</p>
              <LoadingDots speed={1} />
              
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Fast (0.5s)</p>
              <LoadingDots speed={0.5} />
                
            </div>
          </div>
        </Showcase>
      </ComponentPage.Section>

      {/* With Label */}
      <ComponentPage.Section
        title="With Label"
        description="Loading dots with accompanying label"
      >
        <Showcase
          title="Loading with Text"
          description="Display label text alongside loading dots"
          code={WithLabelCode}
          centered
        >
          <LoadingDots>
            <LoadingDots.Dot />
            <LoadingDots.Label>Loading...</LoadingDots.Label>
          </LoadingDots>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference - LoadingDots"
        description="Root loading dots component props"
      >
        <PropsTable data={loadingDotsProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - LoadingDots.Dot"
        description="Dot animation component"
      >
        <PropsTable data={dotProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - LoadingDots.Label"
        description="Optional label component props"
      >
        <PropsTable data={labelProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default LoadingDotsPage;
