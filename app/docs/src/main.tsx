import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ThemeProvider from "./context/themeContext";
import "./index.css";
import App from "./App";

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

// Hooks Pages
import UseTogglePage from "./pages/hooks/UseTogglePage";
import UseCopyToClipboardPage from "./pages/hooks/CopyToClipboardPage";
import UseFetchPage from "./pages/hooks/UseFetchPage";
import UseLocalStoragePage from "./pages/hooks/UseLocalStoragePage";
import UseIntersectionObserverPage from "./pages/hooks/UseIntersectionObserverPage";
import UseWindowSizePage from "./pages/hooks/WindowSizePage";
import UseTimeoutPage from "./pages/hooks/TimeoutPage";

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
      { path: "hooks/use-toggle", element: <UseTogglePage /> },
      { path: "hooks/use-copy-to-clipboard", element: <UseCopyToClipboardPage /> },
      { path: "hooks/use-fetch", element: <UseFetchPage /> },
      { path: "hooks/use-local-storage", element: <UseLocalStoragePage /> },
      { path: "hooks/use-intersection-observer", element: <UseIntersectionObserverPage /> },
      { path: "hooks/use-window-size", element: <UseWindowSizePage /> },
      { path: "hooks/use-timeout", element: <UseTimeoutPage /> },
    ],
  },
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);