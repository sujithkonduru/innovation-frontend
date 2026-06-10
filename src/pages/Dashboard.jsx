import { useEffect, useState } from "react";
import { fetchRegistrations } from "../api/api";
import DataTable from "../components/DataTable";
import Filters from "../components/Filters";
import ExportButton from "../components/ExportButton";

export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Set default dates to the month where data is present (June 2026)
  // or use current month dynamically
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  
  // Helper to format date as YYYY-MM-DD
  const formatDate = (date) => date.toISOString().split('T')[0];
  
  const initialFromDate = formatDate(new Date(currentYear, currentMonth, 1));
  const initialToDate = formatDate(new Date(currentYear, currentMonth + 1, 0));

  const [fromDate, setFromDate] = useState(initialFromDate);
  const [toDate, setToDate] = useState(initialToDate);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchRegistrations(fromDate, toDate);
      setRows(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Innovation Club Dashboard</h1>
      <Filters 
        fromDate={fromDate} 
        toDate={toDate} 
        setFromDate={setFromDate} 
        setToDate={setToDate} 
        loadData={loadData} 
      />
      <ExportButton rows={rows} />
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h3>Loading data...</h3>
        </div>
      ) : (
        <DataTable rows={rows} />
      )}
    </div>
  );
}
