import { cn } from "../../utils/cn";
import type { CardProps } from "./card.types";
import "./card.css";
import { ReactNode } from "react";

export const Card = ({
  children,
  className,
  variant,
  size,
  unstyled,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        !unstyled && "ui-card",
        !unstyled && variant && `ui-card--${variant}`,
        !unstyled && size && `ui-card--${size}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("ui-card-header", className)}>{children}</div>
);

Card.Body = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("ui-card-body", className)}>{children}</div>
);

Card.Footer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("ui-card-footer", className)}>{children}</div>
);

Card.Title = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h3 className={cn("ui-card-title", className)}>{children}</h3>
);

Card.Description = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("ui-card-description", className)}>{children}</p>
);