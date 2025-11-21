import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  it("renders correctly", () => {
    render(
      <Select.Root>
        <Select.Trigger>Select an option</Select.Trigger>
        <Select.List>
          <Select.Option value="option1">Option 1</Select.Option>
        </Select.List>
      </Select.Root>
    );
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("opens dropdown on click", () => {
    render(
      <Select.Root>
        <Select.Trigger>Select</Select.Trigger>
        <Select.List>
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
        </Select.List>
      </Select.Root>
    );

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("selects an option", () => {
    const handleChange = vi.fn();
    render(
      <Select.Root onChange={handleChange}>
        <Select.Trigger>Select</Select.Trigger>
        <Select.List>
          <Select.Option value="option1">Option 1</Select.Option>
        </Select.List>
      </Select.Root>
    );

    const trigger = screen.getByRole("button");
    fireEvent.click(trigger);
    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith("option1");
  });
});
