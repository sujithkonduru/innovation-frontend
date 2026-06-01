import * as XLSX from "xlsx";

export default function ExportButton({ rows }) {
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Innovation Club");
    XLSX.writeFile(wb, "InnovationClub.xlsx");
  };

  return <button className="export-btn" onClick={exportExcel}>Export Excel</button>;
}
