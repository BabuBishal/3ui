// Import styles automatically
import "../theme.css";

// ===== HOOKS =====
export { useCopyToClipboard } from "./hooks/useCopyToClipboard";
export { useLocalStorage } from "./hooks/useLocalStorage";
export { useToggle } from "./hooks/useToggle";
export { useLocalStorageSyncExternal } from "./hooks/useLocalStorageUsingSyncExternalStorage";
export { useFetch } from "./hooks/useFetch";
export { useIntersectionObserverSingle } from "./hooks/useIntersectionObserver";
export { useIntersectionObserverNoRef } from "./hooks/useIntersectionObserverNoRef";
export { default as useOutsideClick } from "./hooks/useOutsideClick";
export { default as useWindowSize } from "./hooks/useWindowSize";
export { useTimeout } from "./hooks/useTimeout";

// ===== COMPONENTS =====

// Button
export { Button } from "./components/button";
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from "./components/button";

// Card
export { Card } from "./components/card";
export type { CardProps } from "./components/card";

// Badge
export { Badge } from "./components/badges";
export type { BadgeProps, BadgeVariant, BadgeSize } from "./components/badges";

// Modal (now named export only)
export { Modal } from "./components/modal";
export type { ModalContextType } from "./components/modal";

// Accordion (now named export only)
export { Accordion } from "./components/accordion";
export type { AccordionContextType } from "./components/accordion";

// Tabs (now named export only)
export { Tabs } from "./components/tabs";
export type { TabsProps, TabsContextType } from "./components/tabs";

// Table (now named export only)
export { Table } from "./components/table";
export type { TableProps, PaginationProps } from "./components/table";

// Toast
export { ToastProvider, useToast } from "./components/toast";
export type {
  ToastOptions,
  ToastItem,
  ToastType,
  ToastContextValue,
} from "./components/toast";

// Toggle
export { Toggle } from "./components/toggle";
export type {
  ToggleRootProps,
  ToggleContextType,
  Variant as ToggleVariant,
} from "./components/toggle";

// Slider (now named export only)
export { Slider } from "./components/slider";
export type { SliderProps, SliderContextType } from "./components/slider";

// Spinner
export { Spinner } from "./components/spinner";
export type { SpinnerProps } from "./components/spinner";

// LoadingDots
export { LoadingDots } from "./components/loadingDots";
export type {
  LoadingDotsProps,
  LoadingDotsContextType,
} from "./components/loadingDots";

// ===== FORM COMPONENTS =====

// Checkbox
export { Checkbox } from "./components/checkbox";
export type { CheckboxProps } from "./components/checkbox";

// Input
export { Input } from "./components/input";
export type { InputProps, InputContextType } from "./components/input";

// Select
export { Select } from "./components/select";
export type { SelectRootProps, SelectContextType } from "./components/select";

// Textarea
export { Textarea } from "./components/textarea";
export type { TextareaProps, TextareaContextType } from "./components/textarea";

// ===== UTILS =====
export { cn } from "./utils/cn";

// ===== styles for backup =====

import './components/accordion/accordion.css';
import './components/badges/badges.css';
import './components/button/button.css';
import './components/card/card.css';
import './components/checkbox/checkbox.css';
import './components/input/input.css';
import './components/loadingDots/loadingdots.css';
import './components/modal/modal.css';
import './components/select/select.css';
import './components/slider/slider.css';
import './components/spinner/spinner.css';
import './components/table/table.css';
import './components/tabs/tabs.css';
import './components/textarea/textarea.css';
import './components/toast/toast.css';
import './components/toggle/toggle.css';
