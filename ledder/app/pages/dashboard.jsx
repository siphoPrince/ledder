import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [applications, setApplications] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/applications",{
      credentials: "include"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to  fetch applications");
        return  res.json();
      })
      .then((data) => setApplications(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-6">DashBoard</h1>

      {/* Header Row */}
      <div className="grid grid-cols-6 gap-6 font-bold bg-gray-200 p-3 rounded-md">
        <div>ID</div>
        <div>Company Name</div>
        <div>Status</div>
        <div>Contact Person</div>
        <div>Contact number</div>
        <div>Edit</div>
      </div>

      {/* Data Rows */}
      {applications.length > 0 ? (
        applications.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-6 p-3 border-b border-gray-600 hover:bg-gray-200 rounded-md"
          >
            <div>{item.id}</div>
            <div>{item.companyName}</div>
            <div>{item.status}</div>
            <div>{item.contactPerson}</div>
            <div>{item.contactNumber}</div>
            <div>
              <button
                onClick={()=> Navigate(`/edit/${item.id}`)}
              ><FaRegEdit className="bg-blue-600 cursor-pointer text-black px-3 py-1 rounded hover:bg-blue-700 text-2xl"/></button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center mt-6">No records found</div>
      )}
    </div>
  );
};

export default DashBoard;
