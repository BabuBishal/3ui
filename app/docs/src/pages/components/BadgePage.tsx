import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Badge } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

/* ------------------ CODE SNIPPETS ------------------ */

const BadgeVariantCode = `<Badge variant="success" >Success</Badge>
<Badge variant="primary" >Primary</Badge>
<Badge variant="secondary" >Secondary</Badge>
<Badge variant="warning" >Warning</Badge>
<Badge variant="danger" >Error</Badge>
<Badge variant="info">Info</Badge>`;

const BadgeSizeCode = `<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="md">Medium</Badge>
<Badge variant="primary" size="lg">Large</Badge>`;

const BadgeRoundedCode = `<Badge variant="primary" rounded>Pill Badge</Badge>
<Badge variant="success" rounded>Success</Badge>`;

const BadgeUnstyledCode = `<Badge unstyled className="custom-badge">
  Custom Styled
</Badge>

<style>
  .custom-badge {
    background: #eef2ff;
    color: #3730a3;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    border: 1px solid #c7d2fe;
  }
</style>`;

/* ------------------ PROPS TABLE DATA ------------------ */

const badgeProps = [
  {
    prop: "variant",
    type: `"primary" | "secondary" | "outline" | "success" | "warning" | "danger"`,
    default: `"primary"`,
    description: "Badge color variant",
  },
  {
    prop: "size",
    type: `"sm" | "md" | "lg"`,
    default: `"md"`,
    description: "Badge size",
  },
  {
    prop: "rounded",
    type: "boolean",
    default: "false",
    description: "Makes the badge pill-shaped",
  },
  {
    prop: "unstyled",
    type: "boolean",
    default: "false",
    description: "Removes all default styles",
  },
];

const importCode = `import { Badge } from "l3ui";`;

const usageCode = `function MyComponent() {
  return (
    <Badge variant="success" size="md">
      Active
    </Badge>
  );
}`;

/* ------------------ PAGE COMPONENT ------------------ */

const BadgePage = () => {
  return (
    <ComponentPage
      title="Badge"
      description="Display status, categories, and labels with colored badges."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Badge"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Variants */}
      <ComponentPage.Section
        title="Variants"
        description="Different visual styles for semantic meaning and emphasis"
      >
        <Showcase
          title="Badge Variants"
          description="Choose from primary, success, warning, danger, and more"
          code={BadgeVariantCode}
          centered
        >
          <Badge variant="success" >Success</Badge>
          <Badge variant="primary" >Primary</Badge>
          <Badge variant="secondary" >Secondary</Badge>
          <Badge variant="warning" >Warning</Badge>
          <Badge variant="danger" >Error</Badge>
          <Badge variant="info">Info</Badge>
        </Showcase>
      </ComponentPage.Section>

      {/* Sizes */}
      <ComponentPage.Section
        title="Sizes"
        description="Small, medium, and large badge sizes"
      >
        <Showcase
          title="Badge Sizes"
          description="Use sizes to match your UI scale"
          code={BadgeSizeCode}
          centered
        >
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
          <Badge variant="primary" size="lg">Large</Badge>
        </Showcase>
      </ComponentPage.Section>

      {/* Rounded */}
      <ComponentPage.Section
        title="Rounded (Pill)"
        description="Create a pill-shaped badge"
      >
        <Showcase
          title="Pill Badges"
          description="Use the rounded prop for capsule shapes"
          code={BadgeRoundedCode}
          centered
        >
          <Badge variant="primary" rounded>Pill Badge</Badge>
          <Badge variant="success" rounded>Success</Badge>
        </Showcase>
      </ComponentPage.Section>

      {/* Unstyled */}
      <ComponentPage.Section
  title="Unstyled"
  description="Remove default styles and fully customize the badge appearance"
>
  <Showcase
    title="Custom Styled Badge"
    description="Using unstyled badge + your own CSS"
    code={BadgeUnstyledCode}
    centered
  >
    <Badge unstyled className="custom-badge">
      Custom Styled
    </Badge>
  </Showcase>
</ComponentPage.Section>


      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference"
        description="Component props and types"
      >
        <PropsTable data={badgeProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default BadgePage;
