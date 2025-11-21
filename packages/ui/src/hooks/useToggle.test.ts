import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("should initialize with default value (false)", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it("should initialize with provided value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  it("should toggle value from false to true", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

  it("should toggle value from true to false", () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });

  it("should maintain stable toggle function reference", () => {
    const { result, rerender } = renderHook(() => useToggle());
    const toggleFn1 = result.current[1];

    rerender();
    const toggleFn2 = result.current[1];

    expect(toggleFn1).toBe(toggleFn2);
  });
});
