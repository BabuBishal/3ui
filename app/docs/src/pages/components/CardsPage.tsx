import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Card } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";


const importCode = `import { Card } from "l3ui";`;

const ElevatedCardCode = `<Card variant="elevated">
  <Card.Header>
    <Card.Title>Elevated Card</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Description>
      Card with shadow for depth.
    </Card.Description>
  </Card.Body>
</Card>`;

const BorderedCardCode = `<Card variant="bordered">
  <Card.Header>
    <Card.Title>Bordered Card</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Description>
      Card with accent border.
    </Card.Description>
  </Card.Body>
</Card>`;

const RoundedCardCode = `<Card variant="rounded">
  <Card.Header>
    <Card.Title>Rounded Card</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Description>
      Card with larger border-radius.
    </Card.Description>
  </Card.Body>
</Card>`;

const cardProps = [
  {
    prop: "variant",
    type: `"elevated" | "bordered" | "rounded"`,
    default: `"elevated"`,
    description: "Visual style variant for the card",
  },
  {
    prop: "unstyled",
    type: "boolean",
    default: "false",
    description: "Remove default styles",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Custom class name",
  },
];


const usageCode = `
function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Description>
          This is a card body content.
        </Card.Description>
      </Card.Body>
      <Card.Footer>Footer content</Card.Footer>
    </Card>
  );
}`

const CardPage = () => {
  return (
    <ComponentPage
      title="Card"
      description="A flexible card component with header, body, footer, title, and description slots."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Card"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Showcase Cards with Different Content */}
      <ComponentPage.Section
        title="Cards Examples"
        description="Cards can have headers, body content, footers, titles, and descriptions."
      >
        <Showcase
          title="Basic Card"
          description="Simple card with header, body, and footer"
          code={usageCode}
          centered
        >
          <Card>
            <Card.Header>
              <Card.Title>Basic Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Description>This is a simple card with a header, body, and footer.</Card.Description>
            </Card.Body>
            <Card.Footer>Footer content</Card.Footer>
          </Card>
        </Showcase>

        <Showcase
          title="Card with Multiple Descriptions"
          description="You can add multiple description paragraphs"
          code={`<Card>...</Card>`}
          centered
        >
          <Card>
            <Card.Header>
              <Card.Title>Multiple Descriptions</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Description>First paragraph of content.</Card.Description>
              <Card.Description>Second paragraph of content.</Card.Description>
            </Card.Body>
            <Card.Footer>Footer info</Card.Footer>
          </Card>
        </Showcase>

        <Showcase
          title="Card Without Footer"
          description="Cards can be used without a footer"
          code={`<Card>...</Card>`}
          centered
        >
          <Card>
            <Card.Header>
              <Card.Title>No Footer Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Description>This card doesn't have a footer section.</Card.Description>
            </Card.Body>
          </Card>
        </Showcase>

        <Showcase
          title="Custom Styled Card"
          description="Use the unstyled prop and your own CSS classes"
          code={`<Card unstyled className="custom-card">...</Card>`}
          centered
        >
          <Card unstyled className="custom-card">
            <Card.Header>
              <Card.Title>Custom Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Description>This card is fully customized with your CSS.</Card.Description>
            </Card.Body>
          </Card>
        </Showcase>
      </ComponentPage.Section>

       <ComponentPage.Section
        title="Variants"
        description="Different visual styles for Card component"
      >
        <Showcase title="Elevated Card" code={ElevatedCardCode} centered>
          <Card variant="elevated">
            <Card.Header>
              <Card.Title>Elevated Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Description>Card with shadow for depth.</Card.Description>
            </Card.Body>
          </Card>
        </Showcase>

        <Showcase title="Bordered Card" code={BorderedCardCode} centered>
          <Card variant="bordered">
            <Card.Header>
              <Card.Title>Bordered Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Description>Card with accent border.</Card.Description>
            </Card.Body>
          </Card>
        </Showcase>

        <Showcase title="Rounded Card" code={RoundedCardCode} centered>
          <Card variant="rounded">
            <Card.Header>
              <Card.Title>Rounded Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Description>Card with larger border-radius.</Card.Description>
            </Card.Body>
          </Card>
        </Showcase>
      </ComponentPage.Section>


      <ComponentPage.Section
        title="API Reference"
        description="Component props and types"
      >
        <PropsTable data={cardProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default CardPage;
