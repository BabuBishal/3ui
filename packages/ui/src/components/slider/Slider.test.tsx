import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders correctly", () => {
    render(
      <Slider>
        <Slider.Field />
      </Slider>
    );
    // Slider.Field renders an input with type="range" which has role "slider"
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("displays value", () => {
    render(
      <Slider initialValue={50}>
        <Slider.Field />
      </Slider>
    );
    expect(screen.getByRole("slider")).toHaveValue("50");
  });

  it("handles value change", () => {
    const handleChange = vi.fn();
    render(
      <Slider>
        <Slider.Field onChange={handleChange} />
      </Slider>
    );
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "75" } });
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Slider disabled>
        <Slider.Field />
      </Slider>
    );
    expect(screen.getByRole("slider")).toBeDisabled();
  });
});
