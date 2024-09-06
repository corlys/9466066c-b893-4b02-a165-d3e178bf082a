import { DataType } from "@/app/ambisius/columns";
import { CellContext } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface EditableCellProps extends CellContext<DataType, unknown> {
  newRow?: boolean;
}

export default function EditableCell(props: EditableCellProps) {
  const initialValue = props.getValue();
  const [value, setValue] = useState(initialValue);
  const [isEdited, setIsEdited] = useState(false);
  const [isError, setIsError] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setIsEdited(false);
    setIsError(false);
  }, [props.table.options.meta?.resetCells]);

  const onBlur = () => {
    const meta = props.table.options.meta;
    if (props.column.id === "email") {
      const validEmail = isValidEmail(value as string);
      console.log("check email ", validEmail);
      setIsError(!validEmail);
      if (!validEmail) {
        toast({
          variant: "destructive",
          title: "Invalid Email",
          description: "Please fix email format before proceeding",
        });
      }
    }
    meta?.updateData(props.row.index, props.column.id, value);
    meta?.handleEditRow(props.row.index);
    setIsEdited(true);
  };

  function isValidEmail(email: string): boolean {
    const pattern: RegExp = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    return pattern.test(email);
  }

  return (
    <>
      <Input
        className={`
          ${(isEdited || props?.newRow) && !isError && "bg-green-200"}
          ${isError && "bg-red-200"}
        `}
        onBlur={onBlur}
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
