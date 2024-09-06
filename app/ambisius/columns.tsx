"use client";

import EditableCell from "@/components/EditableCell";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DataType = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  phone: string;
  email: string;
};

export const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: EditableCell,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: EditableCell,
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: EditableCell,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: EditableCell,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: EditableCell,
  },
];
