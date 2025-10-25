import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditForm = ()=>{
    const {id} = useParams();
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

    useEffect(()=>{
        fetch(`http://localhost:3000/api/applications/${id}`, {
            credentials:"include",
        })
        .then((res)=>{
            if(!res.ok) throw new Error("Failed to  fetch applications");
            return res.json();
        })
        .then((data) => setFormData(data))
        .catch((err) => console.error(err));
    }, [id]);

    const handleChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch(`http://localhost:3000/api/applications/${id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(formData),
        })
        .then((res) =>{
            if(!res.ok) throw new Error("Failed to Update");
            return res.json();
        })
        .then(()=>{
            alert("application update sucessfully!");
            navigate("/dashBoard")
        })
        .catch((err) => console.error(err));
    };

    // delete a row
    const handleDelete = ()=>{
        if(!window.confirm("Are you sure you want to Delete?")) return;

        fetch(`http://localhost:3000/api/applications/${id}`, {
            method: "DELETE",
            credentials: "include",
        })
        .then((res) => {
            if (!res.ok) throw new Error("failed to Delete application");
            return res.json();
        })
        .then(()=>{
            alert("Application Successfully Deleted!");
            navigate("/dashBoard")
        })
        .catch((err) => console.error(err));
    }

    return(
        <div className="p-6 max-w-xl mx-auto text-black">
        <h1 className="text-2xl font-bold mb-6">Edit Application</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label>Company Name</label>
            <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            </div>

            <div>
            <label>Contact Person</label>
            <input
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            </div>

            <div>
            <label>Contact Number</label>
            <input
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            </div>

            <div>
            <label>Status</label>
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            >
                <option value="">Select status</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
                <option value="Offer">Offer</option>
            </select>
            </div>
            <div className="flex gap-4 ml-6"> 
            <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Save Changes
            </button>

            <button
            type="button"
            onClick={handleDelete}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >            
            Delete
            </button>
            </div>
        </form>
        </div>
    );
}

export default EditForm;