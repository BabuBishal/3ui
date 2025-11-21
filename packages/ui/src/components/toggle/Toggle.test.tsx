import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("renders correctly with default label", () => {
    render(
      <Toggle.Root>
        <Toggle.Button />
        <Toggle.Label />
      </Toggle.Root>
    );
    expect(screen.getByRole("switch")).toBeInTheDocument();
    expect(screen.getByText("Off")).toBeInTheDocument();
  });

  it("toggles state uncontrolled", () => {
    render(
      <Toggle.Root>
        <Toggle.Button />
        <Toggle.Label />
      </Toggle.Root>
    );

    const button = screen.getByRole("switch");
    fireEvent.click(button);

    expect(screen.getByText("On")).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-checked", "true");
  });

  it("toggles state controlled", () => {
    const handleChange = vi.fn();
    const Wrapper = () => {
      // Simple wrapper to test controlled state if needed,
      // but for unit test we can just check if onChange is called
      return (
        <Toggle.Root checked={false} onChange={handleChange}>
          <Toggle.Button />
        </Toggle.Root>
      );
    };

    render(<Wrapper />);
    const button = screen.getByRole("switch");
    fireEvent.click(button);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("respects disabled state", () => {
    const handleChange = vi.fn();
    render(
      <Toggle.Root disabled onChange={handleChange}>
        <Toggle.Button />
      </Toggle.Root>
    );

    const button = screen.getByRole("switch");
    expect(button).toHaveAttribute("aria-disabled", "true");

    fireEvent.click(button);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("renders custom label", () => {
    render(
      <Toggle.Root>
        <Toggle.Label>Custom Label</Toggle.Label>
      </Toggle.Root>
    );
    expect(screen.getByText("Custom Label")).toBeInTheDocument();
  });

  it("applies variant styles", () => {
    const { container } = render(
      <Toggle.Root variant="danger">
        <Toggle.Button />
      </Toggle.Root>
    );

    // The variant is applied as a CSS variable on the root div
    // We can check if the style attribute contains the color for danger (#dc2626)
    const root = container.firstChild;
    expect(root).toHaveStyle({ "--toggle-bg-on": "#dc2626" });
  });
});
