import Container from "../../shared/templates/container/Container";
import {CodeBlock} from "../../shared/components/CodeBlock/CodeBlock";
import UseTimeoutDemo from "../../shared/demo/useTimeout/useTimeoutDemo";

const UseTimeoutCode = `const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("");

  const showStatus = (msg: string) => {
    setMessage(msg);
    setIsVisible(true);
  };

  useTimeout(
    () => {
      setIsVisible(false);
      setMessage("");
    },
    isVisible ? 3000 : null
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.label}>useTimeout Demo</h2>
      {/* <p className={styles.desc}></p> */}
      {isVisible && (
        <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>
      )}
      <Button
        variant="outline"
        onClick={() =>
          showStatus("Timeout started! Message will disappear in 3 seconds.")
        }
      >
        Start Timeout
      </Button>
    </div>
  );`;

import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { useState } from "react";
import { useTimeout } from "l3ui";

const importCode = `import { useTimeout } from "l3ui";`;

const usageCodeEx = `function MyComponent() {
  const [count, setCount] = useState(0);
  
  useTimeout(() => {
    setCount(c => c + 1);
  }, 1000);

  return <div>Count: {count}</div>;
}`;

const code = `useTimeout(() => {
  // runs after 1 second
}, 1000);
`;

const props = [
  { prop: "callback", type: "() => void", default: "-", description: "Function to run after timeout" },
  { prop: "delay", type: "number | null", default: "null", description: "Milliseconds until callback runs; null disables" },
];

const UseTimeoutPage = () => {
  function Demo() {
    const [count, setCount] = useState(0);
    useTimeout(() => setCount((c) => c + 1), 1000);
    return <div>Times fired: {count}</div>;
  }

  return (
    <ComponentPage title="useTimeout" description="Run a callback after a delay using a declarative hook">
      <InstallSection componentName="useTimeout" importCode={importCode} usageCode={usageCodeEx} />

      <ComponentPage.Section title="Basic usage" description="Schedule a function to run after a delay">
        <Showcase title="useTimeout" description="Run a callback after delay" code={code}>
          <Demo />
        </Showcase>
      </ComponentPage.Section>

      <ComponentPage.Section title="API Reference" description="Parameters and behavior">
        <PropsTable data={props} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default UseTimeoutPage;
