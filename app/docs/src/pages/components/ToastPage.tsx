import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Button, useToast } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { useToast } from "l3ui";`;

const usageCode = `
function MyComponent() {
  const { notify } = useToast();

  const handleSuccess = () => {
    notify({
      title: "Success",
      description: "Operation completed successfully!",
      type: "success",
    });
  };

  return <Button onClick={handleSuccess}>Show Success</Button>;
}
`;

const SuccessToastCode = `const { notify } = useToast();

<Button
  onClick={() =>
    notify({
      title: "Success",
      description: "Your changes have been saved.",
      type: "success",
    })
  }
>
  Show Success
</Button>`;

const ErrorToastCode = `const { notify } = useToast();

<Button
  onClick={() =>
    notify({
      title: "Error",
      description: "Something went wrong. Please try again.",
      type: "error",
    })
  }
  variant="danger"
>
  Show Error
</Button>`;

const InfoToastCode = `const { notify } = useToast();

<Button
  onClick={() =>
    notify({
      title: "Info",
      description: "Here is some useful information.",
      type: "info",
    })
  }
  variant="secondary"
>
  Show Info
</Button>`;

const WarningToastCode = `const { notify } = useToast();

<Button
  onClick={() =>
    notify({
      title: "Warning",
      description: "Please be careful with this action.",
      type: "warning",
    })
  }
  variant="secondary"
>
  Show Warning
</Button>`;

const PersistentToastCode = `const { notify, dismiss } = useToast();

const handlePersistent = () => {
  const id = notify({
    title: "Persistent",
    description: "This will stay until dismissed",
    duration: 0,
  });
  
  setTimeout(() => dismiss(id), 6000);
};

<Button onClick={handlePersistent}>Show Persistent</Button>`;

const toastProps = [
  {
    prop: "title",
    type: "string",
    default: "-",
    description: "Toast title text",
  },
  {
    prop: "description",
    type: "string",
    default: "-",
    description: "Toast description or message",
  },
  {
    prop: "type",
    type: `"success" | "error" | "warning" | "info"`,
    default: `"info"`,
    description: "Toast type determines color and icon",
  },
  {
    prop: "duration",
    type: "number",
    default: "3000",
    description: "Duration in milliseconds (0 for persistent)",
  },
];

const useToastReturnProps = [
  {
    prop: "notify",
    type: "(config: ToastConfig) => string | number",
    default: "-",
    description: "Function to display a toast, returns toast ID",
  },
  {
    prop: "dismiss",
    type: "(id: string | number) => void",
    default: "-",
    description: "Function to manually dismiss a toast by ID",
  },
];

const ToastPage = () => {
  const { notify, dismiss } = useToast();

  const handlePersistent = () => {
    const id = notify({
      title: "Persistent",
      description: "This will stay until dismissed (auto-dismiss in 6s)",
      duration: 0,
    });
    setTimeout(() => dismiss(id), 6000);
  };

  return (
    <ComponentPage
      title="Toast"
      description="A notification component for displaying brief, auto-expiring messages to inform users of actions or updates."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Toast"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Success Toast */}
      <ComponentPage.Section
        title="Success Toast"
        description="Display successful operation notifications"
      >
        <Showcase
          title="Success Notification"
          description="Notify users of successful actions"
          code={SuccessToastCode}
          centered
        >
          <Button
            onClick={() =>
              notify({
                title: "Success",
                description: "Your changes have been saved.",
                type: "success",
              })
            }
          >
            Show Success
          </Button>
        </Showcase>
      </ComponentPage.Section>

      {/* Error Toast */}
      <ComponentPage.Section
        title="Error Toast"
        description="Display error notifications"
      >
        <Showcase
          title="Error Notification"
          description="Alert users about errors or failures"
          code={ErrorToastCode}
          centered
        >
          <Button
            onClick={() =>
              notify({
                title: "Error",
                description: "Something went wrong. Please try again.",
                type: "error",
              })
            }
            variant="danger"
          >
            Show Error
          </Button>
        </Showcase>
      </ComponentPage.Section>

      {/* Info Toast */}
      <ComponentPage.Section
        title="Info Toast"
        description="Display informational messages"
      >
        <Showcase
          title="Info Notification"
          description="Share information with users"
          code={InfoToastCode}
          centered
        >
          <Button
            onClick={() =>
              notify({
                title: "Info",
                description: "Here is some useful information.",
                type: "info",
              })
            }
            variant="secondary"
          >
            Show Info
          </Button>
        </Showcase>
      </ComponentPage.Section>

      {/* Warning Toast */}
      <ComponentPage.Section
        title="Warning Toast"
        description="Display warning notifications"
      >
        <Showcase
          title="Warning Notification"
          description="Warn users about important issues"
          code={WarningToastCode}
          centered
        >
          <Button
            onClick={() =>
              notify({
                title: "Warning",
                description: "Please be careful with this action.",
                type: "warning",
              })
            }
            variant="secondary"
          >
            Show Warning
          </Button>
        </Showcase>
      </ComponentPage.Section>

      {/* Persistent Toast */}
      <ComponentPage.Section
        title="Persistent Toast"
        description="Display toasts that stay until manually dismissed"
      >
        <Showcase
          title="Persistent Notification"
          description="Toast with duration set to 0 (stays until dismissed)"
          code={PersistentToastCode}
          centered
        >
          <Button onClick={handlePersistent}>Show Persistent</Button>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference - Toast Config */}
      <ComponentPage.Section
        title="API Reference - Toast Config"
        description="Configuration options when calling notify()"
      >
        <PropsTable data={toastProps} />
      </ComponentPage.Section>

      {/* API Reference - useToast Hook */}
      <ComponentPage.Section
        title="API Reference - useToast Hook"
        description="Return value of useToast() hook"
      >
        <PropsTable data={useToastReturnProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default ToastPage;
