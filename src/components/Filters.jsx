export default function Filters(props) {
  return (
    <div className="filters">
      <input type="date" value={props.fromDate} onChange={(e)=>props.setFromDate(e.target.value)} />
      <input type="date" value={props.toDate} onChange={(e)=>props.setToDate(e.target.value)} />
      <button onClick={props.loadData}>Search</button>
    </div>
  );
}
