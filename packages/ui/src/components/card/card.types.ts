import type { HTMLAttributes, ReactNode } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: "elevated" | "bordered" | "rounded";
  size?: "sm" | "md" | "lg";
  unstyled?: boolean; // skip default CSS if user wants fully custom styles
};
