import { lazy, Suspense, useMemo } from "react";
import { column, row } from "../constants/constants";

import {Button, Spinner, LoadingDots, Accordion, Table} from "3ui";

// import ButtonPage from "./componentsPage/ButtonPage";
// import InstallationPage from "./componentsPage/InstallationPage";

// // Lazy load page components
// // const InstallationPage = lazy(
// //   () => import("./componentsPage/InstallationPage")
// // );
// // const ButtonPage = lazy(() => import("./componentsPage/ButtonPage"));
// const BadgePage = lazy(() => import("./componentsPage/BadgePage"));
// const FormElementsPage = lazy(
//   () => import("./componentsPage/FormElementsPage")
// );
// const CardsPage = lazy(() => import("./componentsPage/CardsPage"));
// const TablePage = lazy(() => import("./componentsPage/TablePage"));
// const LoadersPage = lazy(() => import("./componentsPage/LoadersPage"));
// const TabsPage = lazy(() => import("./componentsPage/TabsPage"));
// const AccordionPage = lazy(() => import("./componentsPage/AccordionPage"));
// const ToastPage = lazy(() => import("./componentsPage/ToastPage"));
// const ModalPage = lazy(() => import("./componentsPage/ModalPage"));

// // Hooks pages
// const UseTogglePage = lazy(() => import("./hooksPage/UseTogglePage"));
// const CopyToClipboardPage = lazy(
//   () => import("./hooksPage/CopyToClipboardPage")
// );
// const UseFetchPage = lazy(() => import("./hooksPage/UseFetchPage"));
// const UseLocalStoragePage = lazy(
//   () => import("./hooksPage/UseLocalStoragePage")
// );
// const UseIntersectionObserverPage = lazy(
//   () => import("./hooksPage/UseIntersectionObserverPage")
// );
// const UseWindowSizePage = lazy(() => import("./hooksPage/WindowSizePage"));
// const TimeoutPage = lazy(() => import("./hooksPage/TimeoutPage"));

const Homepage = () => {
  const tableData = useMemo(() => ({ column, row }), []);
  return (
    <div>Homepage
      <Button variant="primary" onClick={() => alert("Button clicked")}>3ui Button</Button>
      <Button variant="secondary">3ui Button</Button>

<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />

<LoadingDots />

<Accordion defaultOpenItems={["item-1"]}>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>

<Table striped pagination={{
    pageSize: 10,
    total: 100,
    onPageChange: (page) => console.log(page)
  }}>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
      <Table.Head>Role</Table.Head>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>



    </div>
    // <div className="homepage">
    //   <section id="introduction" className="section intro-section">
    //     <h2 className="main-title">UI Component Library</h2>
    //     <h4 className="main-desc">
    //       A comprehensive collection of beautiful, accessible, and customizable
    //       UI components built with React
    //     </h4>
    //   </section>

    //   <InstallationPage />
    //   <ButtonPage />
    //   <Suspense fallback={<div className="loading">Loading...</div>}>
    //     <BadgePage />
    //     <FormElementsPage />
    //     <CardsPage />
    //     <TablePage column={tableData.column} row={tableData.row} />
    //     <ToastPage />
    //     <ModalPage />
    //     <LoadersPage />
    //     <TabsPage />
    //     <AccordionPage />

    //     <section className="section hooks-section">
    //       <h1 className="section-heading">Custom Hooks</h1>
    //       <h4 className="section-desc">Common Reusable custom hooks</h4>
    //     </section>

    //     <UseTogglePage />
    //     <CopyToClipboardPage />
    //     <UseFetchPage />
    //     <UseLocalStoragePage />
    //     <UseIntersectionObserverPage />
    //     <UseWindowSizePage />
    //     <TimeoutPage />
    //   </Suspense>
    // </div>
  );
};

export default Homepage;
