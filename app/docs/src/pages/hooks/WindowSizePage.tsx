import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useWindowSize } from "l3ui";

const importCode = `import { useWindowSize } from "l3ui";`;

const usageCodeEx = `function MyComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width} x {height}
    </div>
  );
}`;

const code = `const windowSize = useWindowSize();
return (<div>{windowSize.width} x {windowSize.height}</div>);
`;

const props = [
  { prop: "opts", type: "{ useRaf?: boolean }", default: "{ useRaf: true }", description: "Options to control raf throttling" },
  { prop: "returns", type: "{ width?: number, height?: number }", default: "{ width?: number, height?: number }", description: "Current window size (undefined during SSR)" },
];

const UseWindowSizePage = () => {
  function Demo() {
    const { width, height } = useWindowSize();
    return (
      <div>
        <div>Width: {width}</div>
        <div>Height: {height}</div>
      </div>
    );
  }

  return (
    <ComponentPage title="useWindowSize" description="Track the current window width/height with optional RAF throttling">
      <InstallSection componentName="useWindowSize" importCode={importCode} usageCode={usageCodeEx} />

      <ComponentPage.Section title="Basic usage" description="Read current window size">
        <Showcase title="useWindowSize" description="Window size hook" code={code}>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Options and return value">
        <PropsTable data={props} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseWindowSizePage;
