import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children correctly", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toHaveClass("ui-badge");
    expect(badge).toHaveClass("ui-badge--primary");
    expect(badge).toHaveClass("ui-badge--md");
  });

  it("applies variant classes", () => {
    render(<Badge variant="success">Success</Badge>);
    const badge = screen.getByText("Success");
    expect(badge).toHaveClass("ui-badge--success");
  });

  it("applies size classes", () => {
    render(<Badge size="lg">Large</Badge>);
    const badge = screen.getByText("Large");
    expect(badge).toHaveClass("ui-badge--lg");
  });

  it("applies rounded class when rounded prop is true", () => {
    render(<Badge rounded>Rounded</Badge>);
    const badge = screen.getByText("Rounded");
    expect(badge).toHaveClass("ui-badge--rounded");
  });

  it("does not apply default styles when unstyled is true", () => {
    render(<Badge unstyled>Unstyled</Badge>);
    const badge = screen.getByText("Unstyled");
    expect(badge).not.toHaveClass("ui-badge");
    expect(badge).not.toHaveClass("ui-badge--primary");
  });

  it("merges custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge).toHaveClass("ui-badge", "custom-class");
  });
});
