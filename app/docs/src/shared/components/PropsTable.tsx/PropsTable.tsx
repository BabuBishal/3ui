import { Table } from "l3ui";
import "./PropsTable.css"
export type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
};

export function PropsTable({ data }: { data: PropDefinition[] }) {
  return (
    <Table className="props-table" >
      <Table.Header>
        <Table.Row>
          <Table.Head>Prop</Table.Head>
          <Table.Head>Type</Table.Head>
          <Table.Head>Default</Table.Head>
          <Table.Head>Description</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ prop, type, default: def, description }) => (
          <Table.Row key={prop}>
            <Table.Cell>
              <code>{prop}</code>
            </Table.Cell>

            <Table.Cell>
              <code>{type}</code>
            </Table.Cell>

            <Table.Cell>
              <code>{def ?? "-"}</code>
            </Table.Cell>

            <Table.Cell>{description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
