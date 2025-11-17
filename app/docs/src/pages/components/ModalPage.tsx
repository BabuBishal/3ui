import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Modal, Button } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";

const importCode = `import { Modal } from "l3ui";`;

const usageCode = `
function MyComponent() {
  return (
    <Modal>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <h2>Modal Title</h2>
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal content.</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close>Close</Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
`;

const BasicModalCode = `<Modal>
  <Modal.Trigger>Open Modal</Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <h2>Welcome to the Modal!</h2>
    </Modal.Header>
    <Modal.Body>
      <p>This is some content inside the modal.</p>
      <p>You can put any React elements here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Modal.Close>Close</Modal.Close>
    </Modal.Footer>
  </Modal.Content>
</Modal>`;

const ConfirmationModalCode = `<Modal>
  <Modal.Trigger>Delete Item</Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <h2>Confirm Delete</h2>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </Modal.Body>
    <Modal.Footer>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Modal.Close>Cancel</Modal.Close>
        <Button variant="danger">Delete</Button>
      </div>
    </Modal.Footer>
  </Modal.Content>
</Modal>`;

const FormModalCode = `<Modal>
  <Modal.Trigger>Add New</Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <h2>Add New Item</h2>
    </Modal.Header>
    <Modal.Body>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input 
          placeholder="Name" 
          style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }} 
        />
        <input 
          placeholder="Email" 
          style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }} 
        />
      </form>
    </Modal.Body>
    <Modal.Footer>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Modal.Close>Cancel</Modal.Close>
        <Button variant="primary">Submit</Button>
      </div>
    </Modal.Footer>
  </Modal.Content>
</Modal>`;

const modalProps = [
  {
    prop: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Controls initial open state of the modal",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Modal components (Trigger, Content, etc)",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the wrapper",
  },
];

const triggerProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Trigger button content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the button",
  },
];

const contentProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Modal content (Header, Body, Footer, Close)",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the content",
  },
];

const headerProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Modal header content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const bodyProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Modal body content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const footerProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Modal footer content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const closeProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "'Close'",
    description: "Close button content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the button",
  },
];

const ModalPage = () => {
  return (
    <ComponentPage
      title="Modal"
      description="A modal dialog component using a compound component pattern for flexible content layout."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Modal"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Modal */}
      <ComponentPage.Section
        title="Basic Modal"
        description="Simple modal dialog with header, body, and footer"
      >
        <Showcase
          title="Basic Modal"
          description="A standard modal with title, content, and action buttons"
          code={BasicModalCode}
          centered
        >
          <Modal>
            <Modal.Trigger>Open Modal</Modal.Trigger>
            <Modal.Content>
              <Modal.CloseIcon />
              <Modal.Header>
                <h2>Welcome to the Modal!</h2>
              </Modal.Header>
              <Modal.Body>
                <p>This is some content inside the modal.</p>
                <p>You can put any React elements here.</p>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Close>Close</Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Showcase>
      </ComponentPage.Section>

      {/* Confirmation Modal */}
      <ComponentPage.Section
        title="Confirmation Modal"
        description="Modal for confirming critical actions"
      >
        <Showcase
          title="Delete Confirmation"
          description="Modal asking user to confirm a destructive action"
          code={ConfirmationModalCode}
          centered
        >
          <Modal>
            <Modal.Trigger>Delete Item</Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <h2>Confirm Delete</h2>
              </Modal.Header>
              <Modal.Body>
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
              </Modal.Body>
              <Modal.Footer>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Modal.Close>Cancel</Modal.Close>
                  <Button variant="danger">Delete</Button>
                </div>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Showcase>
      </ComponentPage.Section>

      {/* Form Modal */}
      <ComponentPage.Section
        title="Form Modal"
        description="Modal containing a form for user input"
      >
        <Showcase
          title="Form Modal"
          description="Modal with input fields and form controls"
          code={FormModalCode}
          centered
        >
          <Modal>
            <Modal.Trigger>Add New</Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <h2>Add New Item</h2>
              </Modal.Header>
              <Modal.Body>
                <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input 
                    placeholder="Name" 
                    style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }} 
                  />
                  <input 
                    placeholder="Email" 
                    style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }} 
                  />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Modal.Close>Cancel</Modal.Close>
                  <Button variant="primary">Submit</Button>
                </div>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Showcase>
      </ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference - Modal"
        description="Root modal component props"
      >
        <PropsTable data={modalProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Modal.Trigger"
        description="Trigger button component props"
      >
        <PropsTable data={triggerProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Modal.Content"
        description="Modal content container props"
      >
        <PropsTable data={contentProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Modal.Header"
        description="Modal header component props"
      >
        <PropsTable data={headerProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Modal.Body"
        description="Modal body component props"
      >
        <PropsTable data={bodyProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Modal.Footer"
        description="Modal footer component props"
      >
        <PropsTable data={footerProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Modal.Close"
        description="Modal close button component props"
      >
        <PropsTable data={closeProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default ModalPage;
