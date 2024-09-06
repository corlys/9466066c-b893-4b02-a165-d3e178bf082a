import { DataType } from "@/app/ambisius/columns";
import { CellContext } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface EditableCellProps extends CellContext<DataType, unknown> {
  newRow?: boolean;
}

export default function EditableCell(props: EditableCellProps) {
  const initialValue = props.getValue();
  const [value, setValue] = useState(initialValue);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setIsEdited(false);
  }, [props.table.options.meta?.resetCells]);

  const onBlur = () => {
    const meta = props.table.options.meta;
    meta?.updateData(props.row.index, props.column.id, value);
    meta?.handleEditRow(props.row.index);
    setIsEdited(true);
  };

  return (
    <>
      <Input
        className={`${(isEdited || props?.newRow) && "bg-green-200"}`}
        onBlur={onBlur}
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
