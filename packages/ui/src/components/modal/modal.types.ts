export type ModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export type ModalProps = {
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
};

export type ModalTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export type ModalContentProps = {
  children: React.ReactNode;
  className?: string;
};

export type ModalHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export type ModalCloseProps = {
  children?: React.ReactNode;
  className?: string;
};

export type ModalCloseIconProps = {
  className?: string;
};
