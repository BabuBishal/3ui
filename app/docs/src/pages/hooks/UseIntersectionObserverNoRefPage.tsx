import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useEffect } from "react";
import { useIntersectionObserverNoRef } from "l3ui";

const importCode = `import { useIntersectionObserverNoRef } from "l3ui";`;

const usageCodeEx = `function MyComponent() {
  const entries = useIntersectionObserverNoRef({ 
    selector: '.observe-me', 
    threshold: 0.25 
  });

  return (
    <div className="observe-me">
      Observed element
    </div>
  );
}`;

const code = `const entries = useIntersectionObserverNoRef({ selector: '.observe-me', threshold: 0.25 });

// entries is an array of IntersectionObserverEntry for matched elements
`;

const props = [
  { prop: "selector", type: "string", default: "" , description: "CSS selector for elements to observe" },
  { prop: "threshold", type: "number | number[]", default: "0.1", description: "Intersection threshold" },
  { prop: "returns", type: "IntersectionObserverEntry[]", default: "[]", description: "Array of entries for matched elements" },
];

const UseIntersectionObserverNoRefPage = () => {
  function Demo() {
    const entries = useIntersectionObserverNoRef({ selector: ".observe-me", threshold: 0.1 });

    useEffect(() => {
      // This effect is just to demonstrate entries changing
      // In practice you'd read entries.map(e => e.isIntersecting)
    }, [entries]);

    return (
      <div style={{ display: "grid", gap: 12 }}>
        <div className="observe-me" style={{ padding: 12, border: "1px solid var(--ui-border)" }}>Observed element 1</div>
        <div style={{ height: 200 }} />
        <div className="observe-me" style={{ padding: 12, border: "1px solid var(--ui-border)" }}>Observed element 2</div>
      </div>
    );
  }

  return (
    <ComponentPage title="useIntersectionObserverNoRef" description="Observe elements by selector without managing refs">
      <InstallSection componentName="useIntersectionObserverNoRef" importCode={importCode} usageCode={usageCodeEx} />

      <ComponentPage.Section title="Basic usage" description="Observe multiple elements matching a selector">
        <Showcase title="useIntersectionObserverNoRef" description="Selector-based observation" code={code}>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Options and return value">
        <PropsTable data={props} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseIntersectionObserverNoRefPage;
