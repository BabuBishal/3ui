import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders checkbox correctly", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("handles checked state", () => {
    const handleChange = vi.fn();
    render(<Checkbox checked onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("handles unchecked state", () => {
    const handleChange = vi.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("calls onChange when clicked", () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("supports disabled state", () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("supports unstyled prop", () => {
    render(<Checkbox unstyled label="Label" />);
    const label = screen.getByText("Label").closest("label");
    const checkbox = screen.getByRole("checkbox");

    expect(label).not.toHaveClass("ui-checkbox-wrapper");
    expect(checkbox).not.toHaveClass("ui-checkbox");
  });

  it("applies custom className", () => {
    render(<Checkbox className="custom-checkbox" />);
    const label = screen.getByRole("checkbox").closest("label");
    expect(label).toHaveClass("custom-checkbox");
  });
});
