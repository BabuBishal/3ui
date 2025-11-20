import { ReactNode } from "react";

export interface SelectContextType {
  value: string | null;
  setValue: (val: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
  unstyled?: boolean;
}

export type SelectRootProps = {
  value?: string;
  onChange?: (val: string) => void;
  children: ReactNode;
  className?: string;
  unstyled?: boolean;
};
