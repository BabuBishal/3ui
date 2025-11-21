import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  beforeEach(() => {
    // Create modal-root for portal
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    // Clean up
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  it("renders trigger correctly", () => {
    render(
      <Modal>
        <Modal.Trigger>Open Modal</Modal.Trigger>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );
    expect(screen.getByText("Open Modal")).toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("opens modal on trigger click", () => {
    render(
      <Modal>
        <Modal.Trigger>Open Modal</Modal.Trigger>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );

    fireEvent.click(screen.getByText("Open Modal"));
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("supports defaultOpen prop", () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("closes modal on overlay click", () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );

    // The overlay is the parent of the content
    // Or we can find it by class
    // The implementation has <div className="modal-overlay" onClick={close}>
    // But we can't easily query by class if we don't want to rely on implementation details too much.
    // However, we can click outside the dialog.

    // Let's find the overlay. It's the parent of the dialog.
    const dialog = screen.getByRole("dialog");
    const overlay = dialog.parentElement;

    if (overlay) {
      fireEvent.click(overlay);
    }

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("does not close on content click", () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    fireEvent.click(dialog);

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("closes on Escape key", () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("closes via Close button", () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>
          <Modal.Close>Close Me</Modal.Close>
        </Modal.Content>
      </Modal>
    );

    fireEvent.click(screen.getByText("Close Me"));
    expect(screen.queryByText("Close Me")).not.toBeInTheDocument();
  });

  it("closes via CloseIcon", () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>
          <Modal.CloseIcon />
          Content
        </Modal.Content>
      </Modal>
    );

    const closeIcon = screen.getByLabelText("Close modal");
    fireEvent.click(closeIcon);
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("renders header, body, footer", () => {
    render(
      <Modal defaultOpen>
        <Modal.Content>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Content>
      </Modal>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
