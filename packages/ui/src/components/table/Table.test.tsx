import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Table } from "./Table";

describe("Table", () => {
  it("renders table structure correctly", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Header 1</Table.Head>
            <Table.Head>Header 2</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell 1</Table.Cell>
            <Table.Cell>Cell 2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getAllByRole("columnheader")).toHaveLength(2);
    expect(screen.getAllByRole("cell")).toHaveLength(2);
  });

  it("applies custom className", () => {
    render(<Table className="custom-table" />);
    const wrapper = screen.getByRole("table").parentElement;
    expect(wrapper).toHaveClass("table-wrapper", "custom-table");
  });

  it("applies striped style when prop is true", () => {
    render(<Table striped />);
    const wrapper = screen.getByRole("table").parentElement;
    expect(wrapper).toHaveClass("striped");
  });

  it("renders pagination when provided", () => {
    const paginationProps = {
      total: 50,
      pageSize: 10,
      onPageChange: vi.fn(),
    };
    render(<Table pagination={paginationProps} />);

    expect(screen.getByText("Page 1 / 5")).toBeInTheDocument();
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("handles pagination interactions", () => {
    const onPageChange = vi.fn();
    const paginationProps = {
      total: 50,
      pageSize: 10,
      onPageChange,
    };
    render(<Table pagination={paginationProps} />);

    const nextBtn = screen.getByText("Next");
    const prevBtn = screen.getByText("Prev");

    // Initial state
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).not.toBeDisabled();

    // Go to next page
    fireEvent.click(nextBtn);
    expect(onPageChange).toHaveBeenCalledWith(2);
    expect(screen.getByText("Page 2 / 5")).toBeInTheDocument();
    expect(prevBtn).not.toBeDisabled();

    // Go back
    fireEvent.click(prevBtn);
    expect(onPageChange).toHaveBeenCalledWith(1);
    expect(screen.getByText("Page 1 / 5")).toBeInTheDocument();
  });

  it("renders cell with data-label", () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell dataLabel="Name">John Doe</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    const cell = screen.getByRole("cell");
    expect(cell).toHaveAttribute("data-label", "Name");
  });
});
