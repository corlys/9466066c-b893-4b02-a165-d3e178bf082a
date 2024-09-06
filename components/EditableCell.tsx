import { DataType } from "@/app/ambisius/columns";
import { CellContext } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export default function EditableCell(props: CellContext<DataType, unknown>) {
  const initialValue = props.getValue();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    const meta = props.table.options.meta;
    meta?.updateData(props.row.index, props.column.id, value);
    meta?.handleEditRow(props.row.index);
  };

  useEffect(() => {
    console.log(props.column);
  }, [props.column]);

  return (
    <>
      <Input
        className={`${props.table.options.meta?.editedRows.includes(props.row.index) && "bg-green-300"}`}
        onBlur={onBlur}
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
