import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useLocalStorageSyncExternal } from "./useLocalStorageUsingSyncExternalStorage";

describe("useLocalStorageSyncExternal", () => {
  const key = "test-key";
  const initialValue = "initial";

  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it("should return initial value if localStorage is empty", () => {
    const { result } = renderHook(() =>
      useLocalStorageSyncExternal(key, initialValue)
    );
    expect(result.current[0]).toBe(initialValue);
  });

  it("should return value from localStorage if it exists", () => {
    window.localStorage.setItem(key, JSON.stringify("stored"));
    const { result } = renderHook(() =>
      useLocalStorageSyncExternal(key, initialValue)
    );
    expect(result.current[0]).toBe("stored");
  });

  it("should update localStorage when state changes", () => {
    const { result } = renderHook(() =>
      useLocalStorageSyncExternal(key, initialValue)
    );

    act(() => {
      result.current[1]("new-value");
    });

    expect(result.current[0]).toBe("new-value");
    expect(window.localStorage.getItem(key)).toBe(JSON.stringify("new-value"));
  });

  it("should handle functional updates", () => {
    const { result } = renderHook(() =>
      useLocalStorageSyncExternal(key, "initial")
    );

    act(() => {
      result.current[1]((prev) => prev + "-updated");
    });

    expect(result.current[0]).toBe("initial-updated");
    expect(window.localStorage.getItem(key)).toBe(
      JSON.stringify("initial-updated")
    );
  });

  it("should sync across hooks with same key", () => {
    const { result: result1 } = renderHook(() =>
      useLocalStorageSyncExternal(key, initialValue)
    );
    const { result: result2 } = renderHook(() =>
      useLocalStorageSyncExternal(key, initialValue)
    );

    act(() => {
      result1.current[1]("new-value");
    });

    expect(result1.current[0]).toBe("new-value");
    expect(result2.current[0]).toBe("new-value");
  });

  it("should handle JSON parse errors gracefully", () => {
    window.localStorage.setItem(key, "invalid-json");
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const { result } = renderHook(() =>
      useLocalStorageSyncExternal(key, initialValue)
    );

    // Should fall back to initial value or raw value if parsing fails
    // The implementation falls back to casting raw value if parsing fails
    expect(result.current[0]).toBe("invalid-json");
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("should handle localStorage setItem errors", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Quota exceeded");
    });

    const { result } = renderHook(() =>
      useLocalStorageSyncExternal(key, initialValue)
    );

    act(() => {
      result.current[1]("new-value");
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      "Failed to write localStorage key",
      key,
      expect.any(Error)
    );
  });
});
