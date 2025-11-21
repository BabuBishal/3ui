import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders card structure correctly", () => {
    render(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Description>Description</Card.Description>
          Content
        </Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Card variant="bordered">Content</Card>);
    const card = screen.getByText("Content").closest(".ui-card");
    expect(card).toHaveClass("ui-card--bordered");
  });

  it("applies size classes", () => {
    render(<Card size="sm">Content</Card>);
    const card = screen.getByText("Content").closest(".ui-card");
    expect(card).toHaveClass("ui-card--sm");
  });

  it("supports unstyled prop", () => {
    render(<Card unstyled>Content</Card>);
    const card = screen.getByText("Content").parentElement;
    expect(card).not.toHaveClass("ui-card");
  });

  it("applies custom className", () => {
    render(
      <Card className="custom-card">
        <Card.Header className="custom-header">Header</Card.Header>
        <Card.Body className="custom-body">Body</Card.Body>
        <Card.Footer className="custom-footer">Footer</Card.Footer>
      </Card>
    );

    const card = screen.getByText("Body").closest(".custom-card");
    expect(card).toBeInTheDocument();
    expect(
      screen.getByText("Header").closest(".custom-header")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Body").closest(".custom-body")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Footer").closest(".custom-footer")
    ).toBeInTheDocument();
  });
});
