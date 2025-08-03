import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicationForm(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        jobTitle: "",
        notes: ""
    });


    // update the form input
    const handleInputChange = (field, value) =>{
        setFormData((prev)=>({
            ...prev, [field]:value
        }));
    }

    // when form is submitted
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/")
    };

    return(
        <>
            <div className="flex flex-col gap-6 p-6">
            {/* Return button */}
                <button
                    onClick={() => navigate("/")}
                    className="text-white bg-black cursor-pointer w-32 py-2 px-4 shadow-lg rounded-xl"
                >
                    Return
                </button>

                {/* Heading */}
                <div className="space-y-1">
                    <h2 className="text-xl font-bold">Add New Application</h2>
                    <small className="text-gray-500">
                    Enter the details of your job application
                    </small>
                </div>

                {/* Application details card */}
                <div className="shadow-lg rounded-lg p-5 bg-white">
                    <h5 className="font-semibold text-lg">Application Details</h5>
                    <small className="text-gray-500">
                    Fill in all the relevant information about your job application
                    </small>

                {/* Form detail */}
                <div className="">
                    <h3>Company Information</h3>
                    <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                    <label>
                        Company Name*
                        <input
                            placeholder="Enter Company Name..."
                            type="text"
                            value={formData.companyName}
                            onChange={(e) =>handleInputChange("companyName", e.target.value)}
                            />
                    </label>

                    <label>
                        contactPerson*
                        <input
                            placeholder="Enter Contact Person"
                            type="text"
                            value={formData.contactPerson}
                            onChange={(e)=> handleInputChange("contactPerson", e.target.value)}
                            />
                    </label>

                    <label>
                        jobTitle*
                        <input
                            placeholder="Enter Job Title"
                            type="text"
                            value={formData.jobTitle}
                            onChange={(e)=> handleInputChange("jobTitle", e.target.value)}
                        />
                    </label>

                    <label>
                        notes*
                        <textarea
                            placeholder="Enter any notes"
                            type="text"
                            value={formData.notes}
                            onChange={(e)=> handleInputChange("notes", e.target.value)}
                        />
                    </label>

                    <button type="submit">Submit</button>
                    </form>
                </div>
                </div>

                
            </div>
  </>

    );

}