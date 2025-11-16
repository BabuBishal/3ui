import Container from "../../shared/templates/container/Container";
import CodeBlock from "../../shared/templates/codeBlock/CodeBlock";
import { Spinner } from "3ui";
import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";

const SpinnerSizeCode = `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`;

const SpinnerWithLabelCode = `<Spinner size="md">Loading...</Spinner>`;

const SpinnerCustomCode = `<Spinner size="lg" color="#ff6b6b" speed={0.5}>
  Please wait...
</Spinner>`;

const SpinnerPage = () => {
  return (
    <ComponentPage
      title="Spinner"
      description="An animated loading spinner component for indicating loading states."
    >
      <ComponentPage.Section
        title="Sizes"
        description="Available spinner sizes"
      >
        <Container title="Spinner Sizes" desc="Small, medium, large, and extra large">
          <Container.content>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
          </Container.content>
          <Container.code>
            <CodeBlock code={SpinnerSizeCode} />
          </Container.code>
        </Container>
      </ComponentPage.Section>

      <ComponentPage.Section
        title="With Label"
        description="Add a label below the spinner"
      >
        <Container title="Labeled Spinner" desc="Display text below the spinner">
          <Container.content>
            <Spinner size="md">Loading...</Spinner>
          </Container.content>
          <Container.code>
            <CodeBlock code={SpinnerWithLabelCode} />
          </Container.code>
        </Container>
      </ComponentPage.Section>

      <ComponentPage.Section
        title="Customization"
        description="Customize color and speed"
      >
        <Container title="Custom Spinner" desc="Change color and animation speed">
          <Container.content>
            <Spinner size="lg" color="#ff6b6b" speed={0.5}>
              Please wait...
            </Spinner>
          </Container.content>
          <Container.code>
            <CodeBlock code={SpinnerCustomCode} />
          </Container.code>
        </Container>
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default SpinnerPage;