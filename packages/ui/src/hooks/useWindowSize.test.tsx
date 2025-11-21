import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import useWindowSize from "./useWindowSize";

describe("useWindowSize", () => {
  beforeEach(() => {
    // Mock window dimensions
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 768,
    });

    // Mock requestAnimationFrame
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      return setTimeout(cb, 0) as unknown as number;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation((id) => {
      clearTimeout(id as unknown as number);
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should initialize with current window size", () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({
      width: 1024,
      height: 768,
    });
  });

  it("should update size on resize event", async () => {
    const { result } = renderHook(() => useWindowSize({ useRaf: false }));

    act(() => {
      // Change window size
      (window as any).innerWidth = 500;
      (window as any).innerHeight = 500;

      // Trigger resize event
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 500,
      height: 500,
    });
  });

  it("should update size on orientationchange event", () => {
    const { result } = renderHook(() => useWindowSize({ useRaf: false }));

    act(() => {
      // Change window size
      (window as any).innerWidth = 768;
      (window as any).innerHeight = 1024;

      // Trigger orientationchange event
      window.dispatchEvent(new Event("orientationchange"));
    });

    expect(result.current).toEqual({
      width: 768,
      height: 1024,
    });
  });

  it("should use requestAnimationFrame by default", async () => {
    const { result } = renderHook(() => useWindowSize());
    const rafSpy = vi.spyOn(window, "requestAnimationFrame");

    act(() => {
      (window as any).innerWidth = 800;
      window.dispatchEvent(new Event("resize"));
    });

    expect(rafSpy).toHaveBeenCalled();

    // Wait for RAF to execute
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.width).toBe(800);
  });

  it("should cleanup event listeners on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useWindowSize());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "orientationchange",
      expect.any(Function)
    );
  });
});
