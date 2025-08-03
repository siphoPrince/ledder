import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicationForm({onSubmit}){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        jobTitle: "",
        notes: "",
        aboutCompany: "",
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
        onSubmit(formData);
        navigate("/");
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
                <div className="shadow-lg rounded-lg p-5 bg-white border border-gray-200">
                    <h5 className="font-semibold text-lg">Application Details</h5>
                    <small className="text-gray-500">
                        Fill in all the relevant information about your job application
                    </small>

                {/* Form detail */}
                <div className="">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Company Information</h3>
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        {/*company name section*/}
                        <div className="flex flex-row gap-2">
                            <label>
                                Company Name *
                                <input
                                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="Enter Company Name..."
                                    type="text"
                                    required
                                    value={formData.companyName}
                                    onChange={(e) =>handleInputChange("companyName", e.target.value)}
                                    />
                            </label>

                            <label>
                                Contact Person *
                                <input
                                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="Enter Contact Person"
                                    type="text"
                                    required
                                    value={formData.contactPerson}
                                    onChange={(e)=> handleInputChange("contactPerson", e.target.value)}
                                    />
                            </label>
                        </div>

                        {/* About Company section */}
                        <div>
                        <label className="font-medium text-black mb-1">
                            About Company *
                        
                        <textarea
                            className="flex flex-col gap-1.5 border border-gray-300 rounded-lg w-2xl p-3 h-30  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                            placeholder="Write something about the company..."
                            required
                            value={formData.aboutCompany}
                            onChange={(e)=> handleInputChange("aboutCompany", e.target.value)}
                        />
                        </label>
                        </div>

                        {/*job information section*/}
                        <h3 className="text-sm font-semibold text-gray-700 mb-1">Company Information</h3>
                        <div>
                            <label>
                                job Title *
                                <input
                                    className=" flex flex-col gap-2 border border-gray-300 rounded-lg w-2xl p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="Enter Job Title"
                                    type="text"
                                    required
                                    value={formData.jobTitle}
                                    onChange={(e)=> handleInputChange("jobTitle", e.target.value)}
                                />
                            </label>
                        </div>

                        {/*additional notes(optional)*/}
                        <div>
                        <label>
                            Notes(optional)
                            <textarea
                                className=" flex flex-col border border-gray-300 rounded-lg w-2xl h-28 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="Enter any notes"
                                type="text"
                                value={formData.notes}
                                onChange={(e)=> handleInputChange("notes", e.target.value)}
                            />
                        </label>
                        </div>
                        <button type="submit" className="cursor-pointer w-50 bg-black text-white rounded">Submit Application</button>
                    </form>
                </div>
                </div>

                
            </div>
  </>
    );

}