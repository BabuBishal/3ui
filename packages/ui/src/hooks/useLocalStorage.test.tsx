import { renderHook, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  const key = "test-key";
  const initialValue = "initial";

  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it("should return initial value if localStorage is empty", () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    expect(result.current[0]).toBe(initialValue);
  });

  it("should return value from localStorage if it exists", () => {
    window.localStorage.setItem(key, JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage(key, initialValue));
    expect(result.current[0]).toBe("stored");
  });

  it("should update localStorage when state changes", () => {
    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    act(() => {
      result.current[1]("new-value");
    });

    expect(result.current[0]).toBe("new-value");
    expect(window.localStorage.getItem(key)).toBe(JSON.stringify("new-value"));
  });

  it("should handle functional updates", () => {
    const { result } = renderHook(() => useLocalStorage(key, "initial"));

    act(() => {
      result.current[1]((prev) => prev + "-updated");
    });

    expect(result.current[0]).toBe("initial-updated");
    expect(window.localStorage.getItem(key)).toBe(
      JSON.stringify("initial-updated")
    );
  });

  it("should remove value from localStorage and reset to initialValue", () => {
    window.localStorage.setItem(key, JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    act(() => {
      result.current[2](); // remove
    });

    expect(result.current[0]).toBe(initialValue);
    expect(window.localStorage.getItem(key)).toBeNull();
  });

  it("should handle key changes", () => {
    const { result, rerender } = renderHook(
      ({ k, v }) => useLocalStorage(k, v),
      { initialProps: { k: "key1", v: "value1" } }
    );

    expect(result.current[0]).toBe("value1");
    expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("value1"));

    // Change key
    rerender({ k: "key2", v: "value2" });

    expect(result.current[0]).toBe("value2");
    expect(window.localStorage.getItem("key2")).toBe(JSON.stringify("value2"));
    // key1 should still exist with its last value
    expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("value1"));
  });

  it("should handle JSON parse errors gracefully", () => {
    window.localStorage.setItem(key, "invalid-json");
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    expect(result.current[0]).toBe(initialValue);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("should handle localStorage setItem errors gracefully", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    let callCount = 0;
    const setItemSpy = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        callCount++;
        console.log(`setItem called, call #${callCount}`);
        // Throw error on second call (when setValue is called)
        if (callCount > 1) {
          console.log("Throwing error!");
          throw new Error("Quota exceeded");
        }
      });

    // Render the hook - this will call setItem once to save initial value
    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    // Wait for the initial useEffect to run
    await waitFor(() => {
      expect(callCount).toBe(1);
    });

    // State should be set to initialValue
    expect(result.current[0]).toBe(initialValue);
    console.log("Initial value:", result.current[0]);
    console.log("setItem calls after initial render:", callCount);

    // Update the value, which should trigger the useEffect and the error
    console.log("=== BEFORE setValue ===");
    console.log("callCount:", callCount);
    console.log("current value:", result.current[0]);

    act(() => {
      console.log("=== INSIDE act, calling setValue ===");
      result.current[1]("new-value");
      console.log("=== INSIDE act, after setValue ===");
      console.log("callCount inside act:", callCount);
    });

    console.log("=== AFTER act ===");
    console.log("callCount after act:", callCount);
    console.log("current value after act:", result.current[0]);

    // Wait for effects to run
    await waitFor(
      () => {
        console.log("In waitFor - setItem calls:", callCount);
        console.log(
          "In waitFor - consoleSpy calls:",
          consoleSpy.mock.calls.length
        );
        expect(callCount).toBeGreaterThan(1);
      },
      { timeout: 1000 }
    );

    // State should still update even if localStorage fails
    expect(result.current[0]).toBe("new-value");

    // The hook should have tried to save and logged the error
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error writing to localStorage key:",
      key,
      expect.any(Error)
    );

    setItemSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});
