import { cn } from "../../utils/cn";
import "./badge.css";
import { BadgeProps } from "./badge.types";

export function Badge({
  children,
  className,
  variant = "primary",
  size = "md",
  rounded = false,
  unstyled = false,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        !unstyled && "ui-badge",
        !unstyled && variant && `ui-badge--${variant}`,
        !unstyled && size && `ui-badge--${size}`,
        rounded && "ui-badge--rounded",
        className
      )}
    >
      {children}
    </span>
  );
}
