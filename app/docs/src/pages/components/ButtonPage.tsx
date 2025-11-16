import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Button } from "3ui";

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

const importCode = `import { Button } from "3ui";`;

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
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: "100%", 
            borderCollapse: "collapse",
            border: '1px solid var(--border)',
            borderRadius: '0.5rem',
            overflow: 'hidden'
          }}>
            <thead style={{ background: 'var(--surface)' }}>
              <tr>
                <th style={{ 
                  textAlign: "left", 
                  padding: "0.875rem 1rem",
                  borderBottom: '2px solid var(--border)',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Prop
                </th>
                <th style={{ 
                  textAlign: "left", 
                  padding: "0.875rem 1rem",
                  borderBottom: '2px solid var(--border)',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Type
                </th>
                <th style={{ 
                  textAlign: "left", 
                  padding: "0.875rem 1rem",
                  borderBottom: '2px solid var(--border)',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Default
                </th>
                <th style={{ 
                  textAlign: "left", 
                  padding: "0.875rem 1rem",
                  borderBottom: '2px solid var(--border)',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: "0.875rem 1rem" }}>
                  <code style={{ 
                    background: 'var(--surface)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.8125rem',
                    fontWeight: 500
                  }}>
                    variant
                  </code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>"primary" | "secondary" | "outline" | "danger"</code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>"primary"</code>
                </td>
                <td style={{ 
                  padding: "0.875rem 1rem",
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)'
                }}>
                  Visual style variant
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: "0.875rem 1rem" }}>
                  <code style={{ 
                    background: 'var(--surface)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.8125rem',
                    fontWeight: 500
                  }}>
                    size
                  </code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>"sm" | "md" | "lg"</code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>"md"</code>
                </td>
                <td style={{ 
                  padding: "0.875rem 1rem",
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)'
                }}>
                  Button size
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: "0.875rem 1rem" }}>
                  <code style={{ 
                    background: 'var(--surface)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.8125rem',
                    fontWeight: 500
                  }}>
                    disabled
                  </code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>boolean</code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>false</code>
                </td>
                <td style={{ 
                  padding: "0.875rem 1rem",
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)'
                }}>
                  Disables the button
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.875rem 1rem" }}>
                  <code style={{ 
                    background: 'var(--surface)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.8125rem',
                    fontWeight: 500
                  }}>
                    onClick
                  </code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>() =&gt; void</code>
                </td>
                <td style={{ padding: "0.875rem 1rem", fontSize: '0.8125rem' }}>
                  <code>-</code>
                </td>
                <td style={{ 
                  padding: "0.875rem 1rem",
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)'
                }}>
                  Click event handler
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default ButtonPage;