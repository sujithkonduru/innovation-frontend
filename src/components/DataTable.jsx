import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows }) {
  const columns = [
    { field: "Name", headerName: "Student Name", flex: 1 },
    { field: "ParentName", headerName: "Parent Name", flex: 1 },
    { field: "mobile_no", headerName: "Mobile", flex: 1 },
    { field: "School", headerName: "School", flex: 1.5 },
    { field: "Class", headerName: "Class", flex: 1 },
    { field: "des", headerName: "Description", flex: 2 }
  ];

  return (
    <div style={{ height: 650 }}>
      <DataGrid
        rows={rows.map((r, i) => ({ id: i + 1, ...r }))}
        columns={columns}
        pageSizeOptions={[10, 25, 50]}
      />
    </div>
  );
}
