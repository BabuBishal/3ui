import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";
import { cn } from "@/utils/cn";
import "./select.css";
import { SelectContextType, SelectRootProps } from "./select.types";

const SelectContext = createContext<SelectContextType | undefined>(undefined);

function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Select compound components must be used within Select.Root");
  return context;
}

export const Select = {
  Root: ({ value: valueProp, onChange, children, className, unstyled }: SelectRootProps) => {
    const [value, setValue] = useState<string | null>(valueProp || null);
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const handleSelect = (val: string) => {
      setValue(val);
      onChange?.(val);
      setIsOpen(false);
    };

    const toggleOpen = () => setIsOpen((prev) => !prev);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <SelectContext.Provider value={{ value, setValue: handleSelect, isOpen, toggleOpen }}>
        <div
          ref={rootRef}
          className={cn("ui-select-root", className, unstyled && "ui-select--unstyled")}
        >
          {children}
        </div>
      </SelectContext.Provider>
    );
  },

  Trigger: ({ children, className }: { children: ReactNode; className?: string }) => {
    const { value, toggleOpen } = useSelectContext();
    return (
      <button
        type="button"
        className={cn("ui-select-trigger", className)}
        onClick={toggleOpen}
      >
        {value || children}
      </button>
    );
  },

  Option: ({ children, value, className }: { children: ReactNode; value: string; className?: string }) => {
    const { value: selectedValue, setValue } = useSelectContext();
    const isSelected = selectedValue === value;

    return (
      <div
        className={cn("ui-select-option", className, isSelected && "selected")}
        onClick={() => setValue(value)}
      >
        {children}
        {isSelected && <span className="checkmark">✔</span>}
      </div>
    );
  },

  List: ({ children, className }: { children: ReactNode; className?: string }) => {
    const { isOpen } = useSelectContext();
    if (!isOpen) return null;
    return <div className={cn("ui-select-list", className)}>{children}</div>;
  },
};
