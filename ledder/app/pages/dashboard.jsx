import { useEffect, useState } from "react";

const DashBoard = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/records") // your backend endpoint
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-amber-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Ledger Records</h1>

      {/* Header Row */}
      <div className="grid grid-cols-4 gap-4 font-bold bg-amber-700 p-3 rounded-md">
        <div>ID</div>
        <div>Name</div>
        <div>Amount</div>
        <div>Date</div>
      </div>

      {/* Data Rows */}
      {records.length > 0 ? (
        records.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 p-3 border-b border-gray-600 hover:bg-amber-800 rounded-md"
          >
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.amount}</div>
            <div>{item.date}</div>
          </div>
        ))
      ) : (
        <div className="text-center mt-6">No records found</div>
      )}
    </div>
  );
};

export default DashBoard;
