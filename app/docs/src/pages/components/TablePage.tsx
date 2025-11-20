import { ComponentPage } from "../../shared/templates/component-page/ComponentPage";
import { InstallSection } from "../../shared/components/InstallSection/InstallSection";
import { Showcase } from "../../shared/components/Showcase/Showcase";
import { Table } from "l3ui";
import { PropsTable } from "../../shared/components/PropsTable.tsx/PropsTable";
import { PaginatedTableExample } from "../../shared/components/PaginatedTableExample";
import {tableData} from "../../constants/constants"

const importCode = `import { Table } from "l3ui";`;

const usageCode = `
function MyComponent() {
  const columns = ["Name", "Email", "Status"];
  const rows = [
    ["John Doe", "john@example.com", "Active"],
    ["Jane Smith", "jane@example.com", "Inactive"],
  ];

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {columns.map((col, i) => (
            <Table.Head key={i}>{col}</Table.Head>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row, rowIndex) => (
          <Table.Row key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Table.Cell key={cellIndex}>{cell}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
`;

const BasicTableCode = `<Table striped>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
      <Table.Head>Status</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell dataLabel="Name">John Doe</Table.Cell>
      <Table.Cell dataLabel="Email">john@example.com</Table.Cell>
      <Table.Cell dataLabel="Status">Active</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell dataLabel="Name">Jane Smith</Table.Cell>
      <Table.Cell dataLabel="Email">jane@example.com</Table.Cell>
      <Table.Cell dataLabel="Status">Inactive</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell dataLabel="Name">Bob Wilson</Table.Cell>
      <Table.Cell dataLabel="Email">bob@example.com</Table.Cell>
      <Table.Cell dataLabel="Status">Active</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`;

const MultiColumnTableCode = `<Table striped>
  <Table.Header>
    <Table.Row>
      <Table.Head>ID</Table.Head>
      <Table.Head>Product</Table.Head>
      <Table.Head>Price</Table.Head>
      <Table.Head>Quantity</Table.Head>
      <Table.Head>Total</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell dataLabel="ID">1</Table.Cell>
      <Table.Cell dataLabel="Product">Laptop</Table.Cell>
      <Table.Cell dataLabel="Price">$999</Table.Cell>
      <Table.Cell dataLabel="Quantity">2</Table.Cell>
      <Table.Cell dataLabel="Total">$1998</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell dataLabel="ID">2</Table.Cell>
      <Table.Cell dataLabel="Product">Mouse</Table.Cell>
      <Table.Cell dataLabel="Price">$25</Table.Cell>
      <Table.Cell dataLabel="Quantity">5</Table.Cell>
      <Table.Cell dataLabel="Total">$125</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`;

const PaginatedTableCode = `function PaginatedTable({tableData}) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = tableData.slice(startIndex, endIndex);

  return (
    <Table 
      striped
      pagination={{
        total: tableData.length,
        pageSize: pageSize,
        onPageChange: (page) => setCurrentPage(page)
      }}
    >
      <Table.Header>
        <Table.Row>
          <Table.Head>ID</Table.Head>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Role</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {currentData.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell dataLabel="ID">{user.id}</Table.Cell>
            <Table.Cell dataLabel="Name">{user.name}</Table.Cell>
            <Table.Cell dataLabel="Email">{user.email}</Table.Cell>
            <Table.Cell dataLabel="Role">{user.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}`;

const tableProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Table structure including Header and Body",
  },
  {
    prop: "striped",
    type: "boolean",
    default: "false",
    description: "Adds striped styling to table rows",
  },
  {
    prop: "pagination",
    type: "{ total: number; pageSize: number; onPageChange?: (page: number) => void }",
    default: "-",
    description: "Pagination configuration for the table",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class for the table element",
  },
];

const headerProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Header rows and cells",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const bodyProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Body rows and cells",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const rowProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Head or Cell elements",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const headProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Header cell content",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const cellProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "Cell content",
  },
  {
    prop: "dataLabel",
    type: "string",
    default: "-",
    description: "Label for responsive display on mobile",
  },
  {
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS class",
  },
];

const TablePage = () => {
  return (
    <ComponentPage
      title="Table"
      description="A flexible table component with header, body, rows, and cells for displaying tabular data."
    >
      {/* Installation Section */}
      <InstallSection
        componentName="Table"
        importCode={importCode}
        usageCode={usageCode}
      />

      {/* Basic Table */}
      <ComponentPage.Section
        title="Basic Table"
        description="Simple table with headers and rows"
      >
        <Showcase
          title="User Table"
          description="A table displaying user information"
          code={BasicTableCode}
          centered
        >
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Status</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell dataLabel="Name">John Doe</Table.Cell>
                <Table.Cell dataLabel="Email">john@example.com</Table.Cell>
                <Table.Cell dataLabel="Status">Active</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell dataLabel="Name">Jane Smith</Table.Cell>
                <Table.Cell dataLabel="Email">jane@example.com</Table.Cell>
                <Table.Cell dataLabel="Status">Inactive</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell dataLabel="Name">Bob Wilson</Table.Cell>
                <Table.Cell dataLabel="Email">bob@example.com</Table.Cell>
                <Table.Cell dataLabel="Status">Active</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Showcase>
      </ComponentPage.Section>

      {/* Multi-column Table */}
      <ComponentPage.Section
        title="Multi-column Table"
        description="Table with multiple columns for complex data"
      >
        <Showcase
          title="Product Orders Table"
          description="Table displaying product orders with multiple columns"
          code={MultiColumnTableCode}
          centered
        >
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.Head>ID</Table.Head>
                <Table.Head>Product</Table.Head>
                <Table.Head>Price</Table.Head>
                <Table.Head>Quantity</Table.Head>
                <Table.Head>Total</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell dataLabel="ID">1</Table.Cell>
                <Table.Cell dataLabel="Product">Laptop</Table.Cell>
                <Table.Cell dataLabel="Price">$999</Table.Cell>
                <Table.Cell dataLabel="Quantity">2</Table.Cell>
                <Table.Cell dataLabel="Total">$1998</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell dataLabel="ID">2</Table.Cell>
                <Table.Cell dataLabel="Product">Mouse</Table.Cell>
                <Table.Cell dataLabel="Price">$25</Table.Cell>
                <Table.Cell dataLabel="Quantity">5</Table.Cell>
                <Table.Cell dataLabel="Total">$125</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Showcase>
      </ComponentPage.Section>

      {/* Paginated Table */}
<ComponentPage.Section
  title="Table with Pagination"
  description="Table with pagination controls for large datasets"
>
  <Showcase
    title="Users Table with Pagination"
    description="Navigate through pages of data with built-in pagination controls"
    code={PaginatedTableCode}
    centered
  >
    <PaginatedTableExample tableData={tableData}/>
  </Showcase>
</ComponentPage.Section>

      {/* API Reference */}
      <ComponentPage.Section
        title="API Reference - Table"
        description="Root table component props"
      >
        <PropsTable data={tableProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Table.Header"
        description="Header section component props"
      >
        <PropsTable data={headerProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Table.Body"
        description="Body section component props"
      >
        <PropsTable data={bodyProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Table.Row"
        description="Row component props"
      >
        <PropsTable data={rowProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Table.Head"
        description="Header cell component props"
      >
        <PropsTable data={headProps} />
      </ComponentPage.Section>

      <ComponentPage.Section
        title="API Reference - Table.Cell"
        description="Body cell component props"
      >
        <PropsTable data={cellProps} />
      </ComponentPage.Section>
    </ComponentPage>
  );
};

export default TablePage;
