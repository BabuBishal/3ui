import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders spinner correctly", () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector(".spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<Spinner size="lg" />);
    const spinner = container.querySelector(".spinner");
    expect(spinner).toHaveClass("spinner--lg");
  });

  it("applies custom color", () => {
    const { container } = render(<Spinner color="red" />);
    const spinner = container.querySelector(".spinner");
    // Check specific border color as shorthand might be expanded
    // JSDOM might not parse shorthand correctly in toHaveStyle, so check style directly
    expect((spinner as HTMLElement).style.borderTopColor).toBe("red");
  });

  it("applies custom speed", () => {
    const { container } = render(<Spinner speed={2} />);
    const spinner = container.querySelector(".spinner");
    expect(spinner).toHaveStyle({ animationDuration: "2s" });
  });

  it("renders label", () => {
    render(<Spinner>Loading...</Spinner>);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toHaveClass("spinner-label");
  });

  it("applies custom className", () => {
    const { container } = render(<Spinner className="custom-spinner" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("custom-spinner");
  });
});
