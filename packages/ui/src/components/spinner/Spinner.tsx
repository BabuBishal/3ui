import { type ReactNode } from "react";
import { cn } from "@/utils/cn";
import "./spinner.css";

export type SpinnerSize = "sm" | "md" | "lg" | "xl";

export type SpinnerProps = {
  size?: SpinnerSize;
  color?: string;
  speed?: number;
  className?: string;
  children?: ReactNode;
};

export const Spinner = ({
  size = "md",
  color = "var(--ui-accent)",
  speed = 1,
  className,
  children,
}: SpinnerProps) => {
  return (
    <div className={cn("spinner-wrapper", className)}>
      <div
        className={cn("spinner", `spinner--${size}`)}
        style={{
          borderColor: `${color} transparent transparent transparent`,
          animationDuration: `${speed}s`,
        }}
      />
      {children && <span className="spinner-label">{children}</span>}
    </div>
  );
};
