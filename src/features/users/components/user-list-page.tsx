import { payments } from "../user-mock";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function UserListPage() {
    return (
        <DataTable
            columns={columns}
            data={payments}
        />
    )
}