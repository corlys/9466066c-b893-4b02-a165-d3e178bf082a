import { DataType, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<DataType[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      firstName: "Suparman",
      lastName: "Tengkl",
      position: "Janitor",
      phone: "(+62) 86157579213",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
