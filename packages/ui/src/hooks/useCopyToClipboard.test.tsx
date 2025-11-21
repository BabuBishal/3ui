import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useCopyToClipboard } from "./useCopyToClipboard";

describe("useCopyToClipboard", () => {
  const originalClipboard = navigator.clipboard;

  beforeEach(() => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  afterEach(() => {
    // Restore clipboard API
    Object.assign(navigator, {
      clipboard: originalClipboard,
    });
    vi.restoreAllMocks();
  });

  it("copies text successfully", async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.current.copy("test text");
      expect(success).toBe(true);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("test text");
    expect(result.current.copiedText).toBe("test text");
    expect(result.current.isCopied).toBe(true);
  });

  it("handles copy failure", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    (navigator.clipboard.writeText as any).mockRejectedValue(
      new Error("Copy failed")
    );

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.current.copy("test text");
      expect(success).toBe(false);
    });

    expect(result.current.copiedText).toBe(null);
    expect(result.current.isCopied).toBe(false);

    consoleErrorSpy.mockRestore();
  });

  it("handles missing clipboard API", async () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    Object.assign(navigator, { clipboard: undefined });

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.current.copy("test text");
      expect(success).toBe(false);
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith("Clipboard API not supported");
    expect(result.current.isCopied).toBe(false);

    consoleWarnSpy.mockRestore();
  });
});
