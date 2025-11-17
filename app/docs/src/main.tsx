import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ThemeProvider from "./context/themeContext";
import "./index.css";
import App from "./App";
import { Suspense, lazy } from "react";

// Pages
import Homepage from "./pages/Homepage";
import InstallationPage from "./pages/Installation";
// import GettingStarted from "./pages/GettingStarted";

// Component Pages
import ButtonPage from "./pages/components/ButtonPage";
import BadgePage from "./pages/components/BadgePage";
import CardsPage from "./pages/components/CardsPage";
import InputPage from "./pages/components/InputPage";
import SelectPage from "./pages/components/SelectPage";
import TextareaPage from "./pages/components/TextareaPage";
import CheckboxPage from "./pages/components/CheckboxPage";
import TogglePage from "./pages/components/TogglePage";
import SliderPage from "./pages/components/SliderPage";
import TablePage from "./pages/components/TablePage";
import ModalPage from "./pages/components/ModalPage";
import ToastPage from "./pages/components/ToastPage";
import TabsPage from "./pages/components/TabsPage";
import AccordionPage from "./pages/components/AccordionPage";
import SpinnerPage from "./pages/components/SpinnerPage";
import LoadingDotsPage from "./pages/components/LoadingDotsPage";

// Lazy load hooks pages to avoid SSR issues
const UseTogglePage = lazy(() => import("./pages/hooks/UseTogglePage"));
const UseCopyToClipboardPage = lazy(() => import("./pages/hooks/CopyToClipboardPage"));
const UseFetchPage = lazy(() => import("./pages/hooks/UseFetchPage"));
const UseLocalStoragePage = lazy(() => import("./pages/hooks/UseLocalStoragePage"));
const UseIntersectionObserverPage = lazy(() => import("./pages/hooks/UseIntersectionObserverPage"));
const UseWindowSizePage = lazy(() => import("./pages/hooks/WindowSizePage"));
const UseTimeoutPage = lazy(() => import("./pages/hooks/TimeoutPage"));

const LoadingFallback = () => <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "installation", element: <InstallationPage /> },
      // { path: "getting-started", element: <GettingStarted /> },
      
      // Components
      { path: "components/button", element: <ButtonPage /> },
      { path: "components/badge", element: <BadgePage /> },
      { path: "components/card", element: <CardsPage /> },
      { path: "components/input", element: <InputPage /> },
      { path: "components/select", element: <SelectPage /> },
      { path: "components/textarea", element: <TextareaPage /> },
      { path: "components/checkbox", element: <CheckboxPage /> },
      { path: "components/toggle", element: <TogglePage /> },
      { path: "components/slider", element: <SliderPage /> },
      { path: "components/table", element: <TablePage /> },
      { path: "components/modal", element: <ModalPage /> },
      { path: "components/toast", element: <ToastPage /> },
      { path: "components/tabs", element: <TabsPage /> },
      { path: "components/accordion", element: <AccordionPage /> },
      { path: "components/spinner", element: <SpinnerPage /> },
      { path: "components/loading-dots", element: <LoadingDotsPage /> },
      
      // Hooks
      { path: "hooks/use-toggle", element: <Suspense fallback={<LoadingFallback />}><UseTogglePage /></Suspense> },
      { path: "hooks/use-copy-to-clipboard", element: <Suspense fallback={<LoadingFallback />}><UseCopyToClipboardPage /></Suspense> },
      { path: "hooks/use-fetch", element: <Suspense fallback={<LoadingFallback />}><UseFetchPage /></Suspense> },
      { path: "hooks/use-local-storage", element: <Suspense fallback={<LoadingFallback />}><UseLocalStoragePage /></Suspense> },
      { path: "hooks/use-intersection-observer", element: <Suspense fallback={<LoadingFallback />}><UseIntersectionObserverPage /></Suspense> },
      { path: "hooks/use-window-size", element: <Suspense fallback={<LoadingFallback />}><UseWindowSizePage /></Suspense> },
      { path: "hooks/use-timeout", element: <Suspense fallback={<LoadingFallback />}><UseTimeoutPage /></Suspense> },
    ],
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);