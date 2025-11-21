import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useIntersectionObserverSingle } from "./useIntersectionObserver";
import { useIntersectionObserverNoRef } from "./useIntersectionObserverNoRef";

describe("useIntersectionObserver", () => {
  let observeMock: any;
  let unobserveMock: any;
  let disconnectMock: any;
  let callback: any;

  beforeEach(() => {
    observeMock = vi.fn();
    unobserveMock = vi.fn();
    disconnectMock = vi.fn();

    window.IntersectionObserver = class {
      constructor(cb: any) {
        callback = cb;
      }
      observe = observeMock;
      unobserve = unobserveMock;
      disconnect = disconnectMock;
    } as any;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("useIntersectionObserverSingle", () => {
    it("observes element and updates visibility", () => {
      const { result } = renderHook(() => useIntersectionObserverSingle());
      const [_, ref] = result.current;

      const element = document.createElement("div");
      act(() => {
        ref(element);
      });

      expect(observeMock).toHaveBeenCalledWith(element);

      act(() => {
        callback([{ isIntersecting: true, target: element }]);
      });

      expect(result.current[0]).toBe(true);

      act(() => {
        callback([{ isIntersecting: false, target: element }]);
      });

      expect(result.current[0]).toBe(false);
    });

    it("handles triggerOnce", () => {
      const { result } = renderHook(() =>
        useIntersectionObserverSingle({ triggerOnce: true })
      );
      const [_, ref] = result.current;

      const element = document.createElement("div");
      act(() => {
        ref(element);
      });

      act(() => {
        callback([{ isIntersecting: true, target: element }]);
      });

      expect(result.current[0]).toBe(true);
      expect(disconnectMock).toHaveBeenCalled();
    });
  });

  describe("useIntersectionObserverNoRef", () => {
    it("observes elements by selector", () => {
      const div1 = document.createElement("div");
      div1.className = "test-class";
      document.body.appendChild(div1);

      const div2 = document.createElement("div");
      div2.className = "test-class";
      document.body.appendChild(div2);

      renderHook(() =>
        useIntersectionObserverNoRef({ selector: ".test-class" })
      );

      expect(observeMock).toHaveBeenCalledTimes(2);
      expect(observeMock).toHaveBeenCalledWith(div1);
      expect(observeMock).toHaveBeenCalledWith(div2);

      document.body.removeChild(div1);
      document.body.removeChild(div2);
    });

    it("updates entries on intersection", () => {
      const div = document.createElement("div");
      div.className = "test-class";
      document.body.appendChild(div);

      const { result } = renderHook(() =>
        useIntersectionObserverNoRef({ selector: ".test-class" })
      );

      act(() => {
        callback([{ isIntersecting: true, target: div }]);
      });

      expect(result.current).toHaveLength(1);
      expect(result.current[0].isIntersecting).toBe(true);

      document.body.removeChild(div);
    });

    it("calls onIntersection callback", () => {
      const onIntersection = vi.fn();
      const div = document.createElement("div");
      div.className = "test-class";
      document.body.appendChild(div);

      renderHook(() =>
        useIntersectionObserverNoRef({
          selector: ".test-class",
          onIntersection,
        })
      );

      const entry = { isIntersecting: true, target: div };
      act(() => {
        callback([entry]);
      });

      expect(onIntersection).toHaveBeenCalledWith([entry]);

      document.body.removeChild(div);
    });
  });
});
