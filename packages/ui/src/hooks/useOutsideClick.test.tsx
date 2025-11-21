import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import useOutsideClick from "./useOutsideClick";
import { useRef } from "react";

describe("useOutsideClick", () => {
  let addEventListenerSpy: any;
  let removeEventListenerSpy: any;

  beforeEach(() => {
    addEventListenerSpy = vi.spyOn(document, "addEventListener");
    removeEventListenerSpy = vi.spyOn(document, "removeEventListener");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should add event listeners on mount", () => {
    const ref = { current: document.createElement("div") };
    const callback = vi.fn();

    renderHook(() => useOutsideClick(ref, callback));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function)
    );
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "touchstart",
      expect.any(Function)
    );
  });

  it("should remove event listeners on unmount", () => {
    const ref = { current: document.createElement("div") };
    const callback = vi.fn();

    const { unmount } = renderHook(() => useOutsideClick(ref, callback));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function)
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "touchstart",
      expect.any(Function)
    );
  });

  it("should call callback when clicking outside element", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ref = { current: div };
    const callback = vi.fn();

    renderHook(() => useOutsideClick(ref, callback));

    act(() => {
      const event = new MouseEvent("mousedown", { bubbles: true });
      document.body.dispatchEvent(event);
    });

    expect(callback).toHaveBeenCalledTimes(1);

    document.body.removeChild(div);
  });

  it("should not call callback when clicking inside element", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const ref = { current: div };
    const callback = vi.fn();

    renderHook(() => useOutsideClick(ref, callback));

    act(() => {
      const event = new MouseEvent("mousedown", { bubbles: true });
      div.dispatchEvent(event);
    });

    expect(callback).not.toHaveBeenCalled();

    document.body.removeChild(div);
  });

  it("should not call callback if ref.current is null", () => {
    const ref = { current: null };
    const callback = vi.fn();

    renderHook(() => useOutsideClick(ref, callback));

    act(() => {
      const event = new MouseEvent("mousedown", { bubbles: true });
      document.body.dispatchEvent(event);
    });

    expect(callback).not.toHaveBeenCalled();
  });
});
