import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows }) {
  const columns = [
    {
      field: "schoolName",
      headerName: "School Name",
      flex: 1.5,
    },
    {
      field: "emaiId",
      headerName: "Email ID",
      flex: 1.5,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1.2,
    },
    {
      field: "schoolAddress",
      headerName: "School Address",
      flex: 2,
    },
    {
      field: "area",
      headerName: "Area",
      flex: 1,
    },
    {
      field: "district",
      headerName: "District",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2.5,
    },
  ];

  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={rows.map((row) => ({
          id: row._id || Math.random(),
          ...row,
        }))}
        columns={columns}
        pageSizeOptions={[10, 25, 50]}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </div>
  );
}