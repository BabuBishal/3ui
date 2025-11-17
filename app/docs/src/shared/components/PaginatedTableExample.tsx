import {useState} from "react";
import {Table } from "l3ui";


export const PaginatedTableExample = ({tableData}) => {
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
};