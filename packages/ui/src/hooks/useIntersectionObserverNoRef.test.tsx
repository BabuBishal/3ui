import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useIntersectionObserverNoRef } from "./useIntersectionObserverNoRef";

describe("useIntersectionObserverNoRef", () => {
  let observeSpy: any;
  let unobserveSpy: any;
  let disconnectSpy: any;

  beforeEach(() => {
    // Mock IntersectionObserver
    observeSpy = vi.fn();
    unobserveSpy = vi.fn();
    disconnectSpy = vi.fn();

    window.IntersectionObserver = vi
      .fn()
      .mockImplementation(function (this: any, callback) {
        this.observe = observeSpy;
        this.unobserve = unobserveSpy;
        this.disconnect = disconnectSpy;
        this.trigger = (entries: IntersectionObserverEntry[]) =>
          callback(entries, this);
      }) as any;

    // Mock document.querySelectorAll
    document.body.innerHTML = `
      <div class="test-element" id="el1"></div>
      <div class="test-element" id="el2"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("should observe elements matching selector", () => {
    renderHook(() =>
      useIntersectionObserverNoRef({
        selector: ".test-element",
      })
    );

    expect(observeSpy).toHaveBeenCalledTimes(2);
  });

  it("should update state when intersection occurs", () => {
    const { result } = renderHook(() =>
      useIntersectionObserverNoRef({
        selector: ".test-element",
      })
    );

    // Get the instance created by the hook
    const observerInstance = (window.IntersectionObserver as any).mock
      .instances[0];
    const el1 = document.getElementById("el1")!;

    act(() => {
      observerInstance.trigger([
        {
          target: el1,
          isIntersecting: true,
          intersectionRatio: 1,
        } as unknown as IntersectionObserverEntry,
      ]);
    });

    expect(result.current).toHaveLength(1);
    expect(result.current[0].target).toBe(el1);
    expect(result.current[0].isIntersecting).toBe(true);
  });

  it("should call onIntersection callback", () => {
    const onIntersection = vi.fn();
    renderHook(() =>
      useIntersectionObserverNoRef({
        selector: ".test-element",
        onIntersection,
      })
    );

    const observerInstance = (window.IntersectionObserver as any).mock
      .instances[0];
    const el1 = document.getElementById("el1")!;

    act(() => {
      observerInstance.trigger([
        {
          target: el1,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry,
      ]);
    });

    expect(onIntersection).toHaveBeenCalledTimes(1);
  });

  it("should handle triggerOnce option", () => {
    renderHook(() =>
      useIntersectionObserverNoRef({
        selector: ".test-element",
        triggerOnce: true,
      })
    );

    const observerInstance = (window.IntersectionObserver as any).mock
      .instances[0];
    const el1 = document.getElementById("el1")!;

    act(() => {
      observerInstance.trigger([
        {
          target: el1,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry,
      ]);
    });

    expect(unobserveSpy).toHaveBeenCalledWith(el1);
  });

  it("should cleanup on unmount", () => {
    const { unmount } = renderHook(() =>
      useIntersectionObserverNoRef({
        selector: ".test-element",
      })
    );

    unmount();

    expect(disconnectSpy).toHaveBeenCalled();
  });
});
