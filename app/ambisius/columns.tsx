"use client";

import EditableCell from "@/components/EditableCell";
import { ColumnDef } from "@tanstack/react-table";

export type DataType = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  phone: string;
  email: string;
  newRow?: boolean;
};

export const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => (
      <EditableCell {...props} newRow={props.row.original?.newRow} />
    ),
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: (props) => (
      <EditableCell {...props} newRow={props.row.original?.newRow} />
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: (props) => (
      <EditableCell {...props} newRow={props.row.original?.newRow} />
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: (props) => (
      <EditableCell {...props} newRow={props.row.original?.newRow} />
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => (
      <EditableCell {...props} newRow={props.row.original?.newRow} />
    ),
  },
];
