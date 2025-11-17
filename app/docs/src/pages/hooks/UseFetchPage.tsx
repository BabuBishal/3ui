import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useState } from "react";
import { useFetch } from "l3ui";

const importCode = `import { useFetch } from "l3ui";`;

const usageCodeEx = `function MyComponent() {
  const { data, loading, error } = useFetch<any>("https://api.example.com/data");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}`;

const fetchCode = `const { data, loading, error } = useFetch<any>("https://jsonplaceholder.typicode.com/posts/1");

if (loading) return <div>Loading...</div>;
if (error) return <div>{error.message}</div>;
return <div>{data.title}</div>;
`;

const fetchProps = [
  { prop: "url", type: "string", default: "-", description: "Endpoint to fetch" },
  { prop: "options", type: "RequestInit", default: "-", description: "Fetch options" },
  { prop: "returns", type: "{ data: any, loading: boolean, error: Error | null }", default: "-", description: "Result object" },
];

const UseFetchPage = () => {
  function Demo() {
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts/1");
    const { data, loading, error } = useFetch<any>(url);

    return (
      <div style={{ display: "grid", gap: 12 }}>
        <div>
          <input 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            style={{ 
              width: "100%",
              maxWidth: 480,
              padding: "8px 12px",
              border: "1px solid var(--ui-border)",
              borderRadius: "4px",
              fontSize: "14px",
              fontFamily: "inherit",
              backgroundColor: "var(--ui-background)",
              color: "var(--ui-text-primary)",
              transition: "border-color 0.2s"
            }} 
          />
        </div>
        <div>
          {loading && <div>Loading...</div>}
          {error && <div style={{ color: "var(--ui-danger)" }}>{error.message}</div>}
          {data && <div><strong>{data.title}</strong><p>{data.body}</p></div>}
        </div>
      </div>
    );
  }

  return (
    <ComponentPage title="useFetch" description="A lightweight hook for fetching data with automatic loading and error state.">
      <InstallSection componentName="useFetch" importCode={importCode} usageCode={usageCodeEx} />

      <ComponentPage.Section title="Basic usage" description="Fetch a resource and read loading/error/data">
        <Showcase title="useFetch" description="Simple HTTP fetching" code={fetchCode}>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Hook inputs and return shape">
        <PropsTable data={fetchProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseFetchPage;
