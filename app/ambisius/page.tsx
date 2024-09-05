import { DataType, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<DataType[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      phone: "555-1234",
      position: "Software Engineer",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      phone: "555-5678",
      position: "Project Manager",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      phone: "555-9012",
      position: "Data Analyst",
      email: "michael.johnson@example.com",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      phone: "555-3456",
      position: "UX Designer",
      email: "emily.brown@example.com",
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Wilson",
      phone: "555-7890",
      position: "Product Manager",
      email: "david.wilson@example.com",
    },
    {
      id: 6,
      firstName: "Sarah",
      lastName: "Taylor",
      phone: "555-2345",
      position: "Marketing Specialist",
      email: "sarah.taylor@example.com",
    },
    {
      id: 7,
      firstName: "Robert",
      lastName: "Anderson",
      phone: "555-6789",
      position: "Sales Representative",
      email: "robert.anderson@example.com",
    },
    {
      id: 8,
      firstName: "Lisa",
      lastName: "Martinez",
      phone: "555-0123",
      position: "HR Manager",
      email: "lisa.martinez@example.com",
    },
    {
      id: 9,
      firstName: "William",
      lastName: "Thomas",
      phone: "555-4567",
      position: "System Administrator",
      email: "william.thomas@example.com",
    },
    {
      id: 10,
      firstName: "Jennifer",
      lastName: "Garcia",
      phone: "555-8901",
      position: "Financial Analyst",
      email: "jennifer.garcia@example.com",
    },
    {
      id: 11,
      firstName: "Daniel",
      lastName: "Lee",
      phone: "555-2345",
      position: "Customer Support Specialist",
      email: "daniel.lee@example.com",
    },
    {
      id: 12,
      firstName: "Maria",
      lastName: "Rodriguez",
      phone: "555-6789",
      position: "Content Writer",
      email: "maria.rodriguez@example.com",
    },
    {
      id: 13,
      firstName: "James",
      lastName: "Wilson",
      phone: "555-0123",
      position: "Quality Assurance Tester",
      email: "james.wilson@example.com",
    },
    {
      id: 14,
      firstName: "Patricia",
      lastName: "Moore",
      phone: "555-4567",
      position: "Business Analyst",
      email: "patricia.moore@example.com",
    },
    {
      id: 15,
      firstName: "Christopher",
      lastName: "Taylor",
      phone: "555-8901",
      position: "Operations Manager",
      email: "christopher.taylor@example.com",
    },
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
