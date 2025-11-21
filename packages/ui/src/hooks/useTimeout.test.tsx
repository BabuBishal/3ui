import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useTimeout } from "./useTimeout";

describe("useTimeout", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it("should execute callback after delay", () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, 1000));

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not execute callback before delay", () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, 1000));

    act(() => {
      vi.advanceTimersByTime(999);
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it("should clear timeout on unmount", () => {
    const callback = vi.fn();
    const { unmount } = renderHook(() => useTimeout(callback, 1000));

    unmount();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it("should not execute if delay is null", () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, null));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it("should execute immediately if delay is 0", () => {
    const callback = vi.fn();
    renderHook(() => useTimeout(callback, 0));

    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should update callback when it changes", () => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();
    const { rerender } = renderHook(({ cb, d }) => useTimeout(cb, d), {
      initialProps: { cb: callback1, d: 1000 },
    });

    // Change callback before timeout triggers
    rerender({ cb: callback2, d: 1000 });

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it("should reset timeout when delay changes", () => {
    const callback = vi.fn();
    const { rerender } = renderHook(({ cb, d }) => useTimeout(cb, d), {
      initialProps: { cb: callback, d: 1000 },
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Change delay
    rerender({ cb: callback, d: 2000 });

    act(() => {
      vi.advanceTimersByTime(500); // Total 1000ms from start, but new delay is 2000ms
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1500); // Total 2000ms from delay change
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
