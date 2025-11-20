export type AccordionContextType = {
  openItems: string[];
  toggleItem: (value: string) => void;
};

export type AccordionProps = {
  children: React.ReactNode;
  defaultOpenItems?: string[];
  className?: string;
};

export type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
};

export type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};
