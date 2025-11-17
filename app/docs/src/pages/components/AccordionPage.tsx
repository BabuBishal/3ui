import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Accordion } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Accordion } from "l3ui";`;

const usageCode = `
function MyComponent() {
  return (
    <Accordion defaultOpenItems={["item1"]}>
      <Accordion.Item value="item1">
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>
          This is the content for section 1
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>
          This is the content for section 2
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
`;

const FaqAccordionCode = `<Accordion defaultOpenItems={["item1"]}>
  <Accordion.Item value="item1">
    <Accordion.Trigger>What is your return policy?</Accordion.Trigger>
    <Accordion.Content>
      You can return any item within 30 days of purchase if it's
      unused and in its original packaging.
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="item2">
    <Accordion.Trigger>
      Do you offer international shipping?
    </Accordion.Trigger>
    <Accordion.Content>
      Yes, we ship worldwide! Shipping costs will vary depending on
      your location and will be calculated at checkout.
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="item3">
    <Accordion.Trigger>How can I track my order?</Accordion.Trigger>
    <Accordion.Content>
      Once your order has been shipped, you'll receive an email with
      a tracking number and link.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>`;

const MultipleOpenAccordionCode = `<Accordion defaultOpenItems={["item1", "item2"]}>
  <Accordion.Item value="item1">
    <Accordion.Trigger>Feature 1</Accordion.Trigger>
    <Accordion.Content>
      Description of feature 1
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="item2">
    <Accordion.Trigger>Feature 2</Accordion.Trigger>
    <Accordion.Content>
      Description of feature 2
    </Accordion.Content>
  </Accordion.Item>
</Accordion>`;

const accordionProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Accordion items",
  },
  {
    prop: "defaultOpenItems",
    type: "string[]",
    default: "[]",
    description: "Array of item values that should be open by default",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the accordion wrapper",
  },
];

const itemProps = [
  {
    prop: "value",
    type: "string",
    default: "-",
    description: "Unique identifier for the accordion item",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Accordion trigger and content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the item",
  },
];

const triggerProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Trigger button text or content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the trigger",
  },
];

const contentProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Accordion item content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the content",
  },
];

const AccordionPage = () => {
  return (
    <ComponentPage
      title="Accordion"
      description="A flexible accordion component for displaying collapsible content sections using a compound component pattern."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Accordion"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* FAQ Accordion */}
      <ComponentPage.Section
        title="FAQ Accordion"
        description="Common use case for frequently asked questions"
      >
        <Showcase
          title="FAQ Section"
          description="Displays information in collapsible sections. Click a header to expand or collapse its content."
          code={FaqAccordionCode}
          centered
        >
          <Accordion defaultOpenItems={["item1"]}>
            <Accordion.Item value="item1">
              <Accordion.Trigger>What is your return policy?</Accordion.Trigger>
              <Accordion.Content>
                You can return any item within 30 days of purchase if it's
                unused and in its original packaging.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item2">
              <Accordion.Trigger>
                Do you offer international shipping?
              </Accordion.Trigger>
              <Accordion.Content>
                Yes, we ship worldwide! Shipping costs will vary depending on
                your location and will be calculated at checkout.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item3">
              <Accordion.Trigger>How can I track my order?</Accordion.Trigger>
              <Accordion.Content>
                Once your order has been shipped, you'll receive an email with
                a tracking number and link.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Showcase>
      </ComponentPage.Section>

      {/* Features Accordion */}
      <ComponentPage.Section
        title="Multiple Open Items"
        description="Allow multiple accordion items to be open simultaneously"
      >
        <Showcase
          title="Product Features"
          description="Multiple expandable feature descriptions"
          code={MultipleOpenAccordionCode}
          centered
        >
          <Accordion defaultOpenItems={["item1", "item2"]}>
            <Accordion.Item value="item1">
              <Accordion.Trigger>Feature 1: Easy to Use</Accordion.Trigger>
              <Accordion.Content>
                Our product is designed with simplicity in mind, making it easy
                for anyone to get started.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item2">
              <Accordion.Trigger>Feature 2: Responsive Design</Accordion.Trigger>
              <Accordion.Content>
                Works seamlessly across all devices and screen sizes.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item3">
              <Accordion.Trigger>Feature 3: Secure & Reliable</Accordion.Trigger>
              <Accordion.Content>
                Enterprise-grade security with 99.9% uptime guarantee.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference - Accordion"
        description="Root accordion component props"
      >
        <PropsTable data={accordionProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Accordion.Item"
        description="Accordion item component props"
      >
        <PropsTable data={itemProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Accordion.Trigger"
        description="Accordion trigger button component props"
      >
        <PropsTable data={triggerProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Accordion.Content"
        description="Accordion content component props"
      >
        <PropsTable data={contentProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default AccordionPage;
