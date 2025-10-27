import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LogoutButton from "../components/logout/logout";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    contactNumber: "",
    companyEmail: "",
    jobTitle: "",
    notes: "",
    aboutCompany: "",
    status: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/applications/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch application");
        return res.json();
      })
      .then((data) => setFormData(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/api/applications/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update");
        return res.json();
      })
      .then(() => {
        alert("Application updated successfully!");
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    fetch(`http://localhost:3000/api/applications/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete application");
        return res.json();
      })
      .then(() => {
        alert("Application successfully deleted!");
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6 text-black">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <h1 className="text-2xl font-bold text-center sm:text-left">
            Edit Application
          </h1>
          <Link to="/" className="bg-gray-200 rounded">Go Back</Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Contact Person</label>
            <input
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Contact Number</label>
            <input
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select status</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Rejected">Rejected</option>
              <option value="Offer">Offer</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start pt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
