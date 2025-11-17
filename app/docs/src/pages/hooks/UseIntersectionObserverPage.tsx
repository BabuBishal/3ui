import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useRef } from "react";
import { useIntersectionObserverSingle } from "l3ui";

const importCode = `import { useIntersectionObserverSingle } from "l3ui";`;

const usageCodeEx = `function MyComponent() {
  const [isVisible, ref] = useIntersectionObserverSingle({ threshold: 0.2 });

  return (
    <div ref={ref}>
      {isVisible ? "I'm visible!" : "Scroll to see me"}
    </div>
  );
}`;

const code = `const [isVisible, ref] = useIntersectionObserverSingle({ threshold: 0.2 });

return <div ref={ref}>I am observed</div>`;

const props = [
  { prop: "threshold", type: "number | number[]", default: "0.1", description: "Intersection threshold" },
  { prop: "root", type: "Element | null", default: "null", description: "Root element for intersection" },
  { prop: "triggerOnce", type: "boolean", default: "false", description: "Disconnect after first intersect" },
  { prop: "returns", type: "[boolean, (el: Element | null) => void]", default: "-", description: "isVisible and ref callback" },
];

const UseIntersectionObserverPage = () => {
  function DemoCard({ n }: { n: number }) {
    const [isVisible, ref] = useIntersectionObserverSingle({ threshold: 0.2 });
    return (
      <div 
        ref={ref} 
        style={{ 
          padding: 16, 
          border: "1px solid var(--ui-border)", 
          borderRadius: 6,
          backgroundColor: isVisible ? "var(--ui-success)" : "var(--ui-background-secondary)",
          color: isVisible ? "white" : "var(--ui-text-primary)",
          opacity: isVisible ? 1 : 0.5,
          transform: isVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(-10px)",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          fontWeight: isVisible ? 600 : 400
        }}
      >
        <h4>Card {n}</h4>
        <div style={{ fontSize: 16 }}>
          {isVisible ? "✓ Visible" : "— Not Visible"}
        </div>
      </div>
    );
  }

  return (
    <ComponentPage title="useIntersectionObserver" description="Observe visibility of a single element using the IntersectionObserver API">
      <InstallSection componentName="useIntersectionObserverSingle" importCode={importCode} usageCode={usageCodeEx} />

      <ComponentPage.Section title="Basic usage" description="Attach the returned ref to an element to observe visibility">
        <Showcase title="useIntersectionObserver" description="Detect element visibility" code={code}>
          <div style={{ height: 400, overflow: "auto", border: "1px solid var(--ui-border)", padding: 12, borderRadius: 6 }}>
            <div style={{ height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ padding: 16, background: "var(--ui-background-secondary)", borderRadius: 4 }}>Scroll down to see elements</div>
            </div>
            <DemoCard n={1} />
            <div style={{ height: 300 }} />
            <DemoCard n={2} />
            <div style={{ height: 300 }} />
            <DemoCard n={3} />
          </div>
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Hook options and return value">
        <PropsTable data={props} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseIntersectionObserverPage;
