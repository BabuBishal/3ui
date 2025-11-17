import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useRef, useState } from "react";
import { useOutsideClick } from "l3ui";
import { Button } from "l3ui";

const importCode = `import { useOutsideClick } from "l3ui";`;

const usageCodeEx = `function MyComponent() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(true);

  useOutsideClick(ref, () => setOpen(false));

  return open ? <div ref={ref}>...</div> : null;
}`;

const code = `const ref = useRef<HTMLDivElement | null>(null);
useOutsideClick(ref, () => {
  // handle outside click
});

return <div ref={ref}>...</div>`;

const props = [
  { prop: "ref", type: "RefObject<HTMLElement>", default: "-", description: "Reference to the element to watch" },
  { prop: "callback", type: "() => void", default: "-", description: "Called when an outside click is detected" },
];

const UseOutsideClickPage = () => {
  function Demo() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(true);
    useOutsideClick(ref, () => setOpen(false));

    return (
      <div style={{ position: "relative" }}>
        <Button variant="primary" onClick={() => setOpen((v) => !v)}>Toggle</Button>
        {open && (
          <div ref={ref} style={{ marginTop: 12, padding: 12, border: "1px solid var(--ui-border)", borderRadius: 6 }}>
            Click outside this box to close it.
          </div>
        )}
      </div>
    );
  }

  return (
    <ComponentPage title="useOutsideClick" description="Detect clicks outside of a referenced element">
      <InstallSection componentName="useOutsideClick" importCode={importCode} usageCode={usageCodeEx} />

      <ComponentPage.Section title="Basic usage" description="Close popovers, modals or menus when clicking outside">
        <Showcase title="useOutsideClick" description="Detects clicks outside an element" code={code} centered>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Arguments">
        <PropsTable data={props} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseOutsideClickPage;
