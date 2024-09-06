"use client";

import {
  ColumnDef,
  RowData,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Save, FilePlus2 } from "lucide-react";
import { DataType } from "./columns";

import { useState, useEffect } from "react";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    editedRows: number[];
    handleEditRow: (rowIndex: number) => void;
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    resetCells: number;
  }
}

export function DataTable<TData extends DataType, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [dataTable, setDataTable] = useState(data);
  const [editedRows, setEditedRows] = useState<number[]>([]);
  const [resetCells, setResetCells] = useState(0);

  const table = useReactTable({
    data: dataTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      resetCells,
      editedRows,
      handleEditRow: (rowIndex) => {
        if (editedRows.filter((item) => item === rowIndex).length === 0)
          setEditedRows((prev) => [...prev, rowIndex]);
      },
      updateData: (rowIndex, columnId, value) =>
        setDataTable((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          }),
        ),
    },
  });

  const handleAddRow = () => {
    const newId =
      dataTable.length > 0
        ? Math.max(...dataTable.map((row) => row.id)) + 1
        : 1;
    const newRow = {
      id: newId,
      firstName: "",
      lastName: "",
      position: "",
      phone: "",
      email: "",
      newRow: true,
    } as TData;

    setDataTable((prevData) => [newRow, ...prevData]);
    setEditedRows((prev) => [...prev, newId]);
  };

  const handleUpdate = () => {
    if (editedRows.length === 0) return;
    const editedRowsData = dataTable.filter((_, index) =>
      editedRows.includes(index),
    );
    console.log(editedRowsData);
    // process edit here
    setEditedRows([]);
    setResetCells((prev) => prev + 1);
    setDataTable((prevData) =>
      prevData.map((row) => ({ ...row, newRow: false })),
    );
  };

  useEffect(() => {
    console.log(dataTable);
  }, [dataTable]);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between self-end gap-2">
          <Button onClick={handleAddRow}>
            <FilePlus2 />
          </Button>
          <Button onClick={handleUpdate}>
            <Save />
          </Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
