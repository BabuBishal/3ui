import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders correctly", () => {
    render(
      <Input>
        <Input.Field placeholder="Enter text" />
      </Input>
    );
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(
      <Input>
        <Input.Field onChange={handleChange} />
      </Input>
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("displays error message", () => {
    render(
      <Input>
        <Input.Field />
        <Input.Error>Invalid input</Input.Error>
      </Input>
    );
    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(
      <Input id="test-input">
        <Input.Label>Username</Input.Label>
        <Input.Field />
      </Input>
    );
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Input disabled>
        <Input.Field />
      </Input>
    );
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("merges custom className", () => {
    render(
      <Input className="custom-input">
        <Input.Field />
      </Input>
    );
    // The className is applied to the wrapper div
    // We can find it by the class "ui-input" which is always present
    const wrapper = screen.getByRole("textbox").closest(".ui-input");
    expect(wrapper).toHaveClass("custom-input");
  });
});
