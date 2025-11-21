import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LoadingDots } from "./LoadingDots";

describe("LoadingDots", () => {
  it("renders default dots correctly", () => {
    const { container } = render(<LoadingDots />);
    const dots = container.querySelectorAll("span");
    expect(dots).toHaveLength(3);
  });

  it("applies size class", () => {
    const { container } = render(<LoadingDots size="lg" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("lg");
  });

  it("applies custom color", () => {
    const { container } = render(<LoadingDots color="red" />);
    const dots = container.querySelectorAll("span");
    dots.forEach((dot) => {
      // JSDOM might convert named colors to RGB
      expect(dot.style.backgroundColor).toBe("red");
    });
  });

  it("applies custom speed", () => {
    const { container } = render(<LoadingDots speed={2} />);
    const dots = container.querySelectorAll("span");
    dots.forEach((dot) => {
      expect(dot).toHaveStyle({ animationDuration: "2s" });
    });
  });

  it("supports unstyled prop", () => {
    const { container } = render(<LoadingDots unstyled color="red" />);
    const dots = container.querySelectorAll("span");
    dots.forEach((dot) => {
      expect(dot).not.toHaveStyle({ backgroundColor: "red" });
    });
  });

  it("renders label", () => {
    render(
      <LoadingDots>
        <LoadingDots.Dot />
        <LoadingDots.Label>Loading...</LoadingDots.Label>
      </LoadingDots>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<LoadingDots className="custom-loading" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("custom-loading");
  });
});
