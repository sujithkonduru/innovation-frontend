import { useEffect, useState } from "react";
import { fetchRegistrations } from "../api/api";
import DataTable from "../components/DataTable";
import Filters from "../components/Filters";
import ExportButton from "../components/ExportButton";

export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState("2026-05-01");
  const [toDate, setToDate] = useState("2026-05-31");

  const loadData = async () => {
    setLoading(true);
    try {
      setRows(await fetchRegistrations(fromDate, toDate));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div className="dashboard">
      <h1>Innovation Club Dashboard</h1>
      <Filters {...{fromDate,toDate,setFromDate,setToDate,loadData}} />
      <ExportButton rows={rows} />
      {loading ? <h3>Loading...</h3> : <DataTable rows={rows} />}
    </div>
  );
}
