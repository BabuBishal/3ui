import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("renders accordion structure correctly", () => {
    render(
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Trigger 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText("Trigger 1")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Trigger 2")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("toggles content visibility on trigger click", () => {
    render(
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger = screen.getByRole("button", { name: /Trigger 1/i });
    const content = screen.getByText("Content 1").closest(".accordion-content");

    // Initially closed (based on implementation, it renders but might be hidden via CSS class)
    expect(content).toHaveClass("accordion-content-closed");
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    // Click to open
    fireEvent.click(trigger);
    expect(content).toHaveClass("accordion-content-open");
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    // Click to close
    fireEvent.click(trigger);
    expect(content).toHaveClass("accordion-content-closed");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("supports defaultOpenItems prop", () => {
    render(
      <Accordion defaultOpenItems={["item-1"]}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Trigger 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const content1 = screen
      .getByText("Content 1")
      .closest(".accordion-content");
    const content2 = screen
      .getByText("Content 2")
      .closest(".accordion-content");

    expect(content1).toHaveClass("accordion-content-open");
    expect(content2).toHaveClass("accordion-content-closed");
  });

  it("handles keyboard interaction (Enter/Space)", () => {
    render(
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger = screen.getByRole("button", { name: /Trigger 1/i });
    const content = screen.getByText("Content 1").closest(".accordion-content");

    // Enter key
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(content).toHaveClass("accordion-content-open");

    // Space key
    fireEvent.keyDown(trigger, { key: " " });
    expect(content).toHaveClass("accordion-content-closed");
  });

  it("applies custom className", () => {
    render(
      <Accordion className="custom-accordion">
        <Accordion.Item value="item-1" className="custom-item">
          <Accordion.Trigger className="custom-trigger">
            Trigger 1
          </Accordion.Trigger>
          <Accordion.Content className="custom-content">
            Content 1
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    // Accordion wrapper
    // Note: We need to find the wrapper. The wrapper has no role by default, but contains children.
    // We can look for the parent of the item.
    const item = screen.getByText("Trigger 1").closest(".accordion-item");
    expect(item).toHaveClass("custom-item");

    const wrapper = item?.parentElement;
    expect(wrapper).toHaveClass("accordion", "custom-accordion");

    const trigger = screen.getByRole("button", { name: /Trigger 1/i });
    expect(trigger).toHaveClass("custom-trigger");

    const content = screen.getByText("Content 1").closest(".accordion-content");
    expect(content).toHaveClass("custom-content");
  });

  it("sets correct accessibility attributes", () => {
    render(
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Trigger 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger = screen.getByRole("button", { name: /Trigger 1/i });
    const content = screen.getByText("Content 1").closest(".accordion-content"); // Content wrapper

    const contentId = content?.getAttribute("id");
    const triggerId = trigger.getAttribute("id");

    expect(trigger).toHaveAttribute("aria-controls", contentId);
    expect(content).toHaveAttribute("aria-labelledby", triggerId);
    expect(content).toHaveAttribute("role", "region");
  });
});
