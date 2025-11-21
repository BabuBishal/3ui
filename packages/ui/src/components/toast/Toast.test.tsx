import { render, screen, act, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ToastProvider, useToast } from "./Toast";

// Test component to trigger toasts
const TestComponent = () => {
  const { notify, dismiss } = useToast();
  return (
    <div>
      <button
        onClick={() =>
          notify({
            title: "Test Title",
            description: "Test Description",
            type: "success",
            duration: 5000,
            className: "custom-toast",
          })
        }
      >
        Show Toast
      </button>
      <button onClick={() => dismiss("test-id")}>Dismiss Toast</button>
    </div>
  );
};

describe("Toast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders toast when triggered", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText("Show Toast"));

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("applies type class", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText("Show Toast"));

    const toast = screen.getByRole("status");
    expect(toast).toHaveClass("toast-variant-success");
  });

  it("applies custom className", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText("Show Toast"));

    const toast = screen.getByRole("status");
    expect(toast).toHaveClass("custom-toast");
  });

  it("dismisses after duration", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText("Show Toast"));
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });

  it("dismisses on close button click", () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText("Show Toast"));
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    const closeBtn = screen.getByLabelText("Close");
    fireEvent.click(closeBtn);

    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });
});
