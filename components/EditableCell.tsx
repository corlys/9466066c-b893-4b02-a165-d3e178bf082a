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
    props.table.options.meta?.updateData(
      props.row.index,
      props.column.id,
      value,
    );
  };

  return (
    <>
      <Input
        onBlur={onBlur}
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
