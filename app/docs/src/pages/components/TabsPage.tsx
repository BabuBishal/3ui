import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Tabs } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Tabs } from "l3ui";`;

const usageCode = `
function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p>Content for Tab 1</p>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p>Content for Tab 2</p>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <p>Content for Tab 3</p>
      </Tabs.Content>
    </Tabs>
  );
}
`;

const BasicTabsCode = `<Tabs defaultValue="Recommended">
  <Tabs.List>
    <Tabs.Trigger value="Recommended">Recommended</Tabs.Trigger>
    <Tabs.Trigger value="Popular">Popular</Tabs.Trigger>
    <Tabs.Trigger value="New">New</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="Recommended">
    <p>This is the Recommended tab content.</p>
  </Tabs.Content>
  <Tabs.Content value="Popular">
    <p>This is the Popular tab content.</p>
  </Tabs.Content>
  <Tabs.Content value="New">
    <p>This is the New tab content.</p>
  </Tabs.Content>
</Tabs>`;

const ControlledTabsCode = `function ControlledTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Trigger value="Overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="Details">Details</Tabs.Trigger>
        <Tabs.Trigger value="Reviews">Reviews</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="Overview">
        <p>Overview content goes here</p>
      </Tabs.Content>
      <Tabs.Content value="Details">
        <p>Details content goes here</p>
      </Tabs.Content>
      <Tabs.Content value="Reviews">
        <p>Reviews content goes here</p>
      </Tabs.Content>
    </Tabs>
  );
}`;

const tabsProps = [
  {
    prop: "defaultValue",
    type: "string",
    default: "-",
    description: "Default active tab value (uncontrolled)",
  },
  {
    prop: "value",
    type: "string",
    default: "-",
    description: "Current active tab value (controlled)",
  },
  {
    prop: "onValueChange",
    type: "(value: string) => void",
    default: "-",
    description: "Callback when active tab changes",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const triggerProps = [
  {
    prop: "value",
    type: "string",
    default: "-",
    description: "Unique identifier for the tab trigger",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Trigger label text",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const listProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Tab triggers",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const contentProps = [
  {
    prop: "value",
    type: "string",
    default: "-",
    description: "Must match the trigger value to display",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Tab content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const TabsPage = () => {
  return (
    <ComponentPage
      title="Tabs"
      description="A flexible tab component with compound architecture for organizing and displaying content in separate sections."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Tabs"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Tabs */}
      <ComponentPage.Section
        title="Basic Tabs"
        description="Simple tabs with triggers and content"
      >
        <Showcase
          title="Product Tabs"
          description="Tabs for different product categories"
          code={BasicTabsCode}
          centered
        >
          <Tabs defaultValue="Recommended">
            <Tabs.List>
              <Tabs.Trigger value="Recommended">Recommended</Tabs.Trigger>
              <Tabs.Trigger value="Popular">Popular</Tabs.Trigger>
              <Tabs.Trigger value="New">New</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="Recommended">
              <p>This is the Recommended tab content.</p>
            </Tabs.Content>
            <Tabs.Content value="Popular">
              <p>This is the Popular tab content.</p>
            </Tabs.Content>
            <Tabs.Content value="New">
              <p>This is the New tab content.</p>
            </Tabs.Content>
          </Tabs>
        </Showcase>
      </ComponentPage.Section>

      {/* Multiple Tab Sections */}
      <ComponentPage.Section
        title="Product Detail Tabs"
        description="Tabs for displaying different product information"
      >
        <Showcase
          title="Product Information"
          description="Overview, details, and reviews tabs"
          code={ControlledTabsCode}
          centered
        >
          <Tabs defaultValue="Overview">
            <Tabs.List>
              <Tabs.Trigger value="Overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="Details">Details</Tabs.Trigger>
              <Tabs.Trigger value="Reviews">Reviews</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="Overview">
              <p>This product is amazing and highly recommended.</p>
            </Tabs.Content>
            <Tabs.Content value="Details">
              <p>
                Detailed specifications: Material: Premium, Color: Black, Size:
                Large
              </p>
            </Tabs.Content>
            <Tabs.Content value="Reviews">
              <p>★★★★★ Great quality and fast shipping!</p>
            </Tabs.Content>
          </Tabs>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference - Tabs"
        description="Root tabs component props"
      >
        <PropsTable data={tabsProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Tabs.List"
        description="Tab list container props"
      >
        <PropsTable data={listProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Tabs.Trigger"
        description="Tab trigger component props"
      >
        <PropsTable data={triggerProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Tabs.Content"
        description="Tab content component props"
      >
        <PropsTable data={contentProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default TabsPage;
