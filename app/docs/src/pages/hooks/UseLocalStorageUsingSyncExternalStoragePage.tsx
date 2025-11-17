import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useLocalStorageSyncExternal } from "l3ui";

const importCode = `import { useLocalStorageSyncExternal } from "l3ui";`;

const usageCodeEx = `function MyComponent() {
  const [value, setValue] = useLocalStorageSyncExternal<string>("my-key", "");

  return (
    <input value={value ?? ""} onChange={(e) => setValue(e.target.value)} />
  );
}`;

const code = `const [value, setValue] = useLocalStorageSyncExternal<MyType>("my-key", initialValue);

// setValue updates all tabs/windows that are listening
setValue((prev) => ({ ...prev, updated: true }));
`;

const props = [
  { prop: "key", type: "string", default: "-", description: "localStorage key to sync" },
  { prop: "initialValue", type: "T", default: "-", description: "Fallback value when key missing" },
  { prop: "returns", type: "[T, (v:T | (prev:T)=>T) => void]", default: "-", description: "Value and setter (syncs across tabs)" },
];

const UseLocalStorageUsingSyncExternalStoragePage = () => {
  function Demo() {
    const [value, setValue] = useLocalStorageSyncExternal<string>("docs-sync", "");
    return (
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <input value={value ?? ""} onChange={(e) => setValue(e.target.value)} />
      </div>
    );
  }

  return (
    <ComponentPage title="useLocalStorageSyncExternal" description="useSyncExternalStore-backed localStorage hook for cross-tab synchronization">
      <InstallSection componentName="useLocalStorageSyncExternal" importCode={importCode} usageCode={usageCodeEx} />

      <ComponentPage.Section title="Basic usage" description="Read and write a key that stays in sync across tabs">
        <Showcase title="useLocalStorageSyncExternal" description="Cross-tab localStorage sync" code={code} centered>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Arguments and return value">
        <PropsTable data={props} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseLocalStorageUsingSyncExternalStoragePage;
