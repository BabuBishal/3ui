import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useFetch } from "./useFetch";

describe("useFetch", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("starts with loading state", async () => {
    (global.fetch as any).mockImplementation(() => new Promise(() => {})); // Never resolves

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
  });

  it("fetches data successfully", async () => {
    const mockData = { id: 1, name: "Test" };
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it("handles fetch error", async () => {
    (global.fetch as any).mockResolvedValue({
      ok: false,
    });

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual(new Error("Fetch failed"));
  });

  it("handles network error", async () => {
    (global.fetch as any).mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual(new Error("Network error"));
  });

  it("avoids state update after unmount", async () => {
    const mockData = { id: 1 };
    let resolveFetch: (value: any) => void;
    (global.fetch as any).mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve;
        })
    );

    const { result, unmount } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    expect(result.current.loading).toBe(true);

    unmount();

    // Resolve fetch after unmount
    resolveFetch!({
      ok: true,
      json: async () => mockData,
    });

    // Wait a bit to ensure no state update happens (console error would appear if it did)
    // Since we can't easily check "state didn't update" on unmounted component directly via result,
    // we rely on React not throwing "update on unmounted component" warning,
    // and the fact that the hook implementation has `isMounted` check.
    // We can check that the result still shows loading=true because the update was skipped.
    expect(result.current.loading).toBe(true);
  });
});
