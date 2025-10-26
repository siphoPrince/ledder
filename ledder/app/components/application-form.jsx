import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"
import { FaAddressBook } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import OverView from "./statsoverview";
import LogoutButton from "./logout/logout";

export default function ApplicationForm({onSubmit}){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        contactNumber: "",
        companyEmail: "",
        jobTitle: "",
        notes: "",
        aboutCompany: "",
        dateTime: "",
        status:""
    });


    // update the form input
    const handleInputChange = (field, value) =>{
        setFormData((prev)=>({
            ...prev, [field]:value
        }));
    }

    // when form is submitted
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/applications",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",

                },
                credentials: "include",
                body: JSON.stringify(formData),

            });

            if(response.ok){
                const newApp = await response.json();
                console.log("Application saved:", newApp);
                if(onSubmit) onSubmit(newApp);
                alert("Application sucessfully added");

                // reset form
                setFormData({
                    companyName: "",
                    contactPerson: "",
                    contactNumber: "",
                    companyEmail: "",
                    jobTitle: "",
                    notes: "",
                    aboutCompany: "",
                    dateTime: "",
                    status: ""
                });
                navigate("/")
                
            } else{
                const error = await response.json();
                alert("Failed to save:", + error.error);
            }
        }catch(err){
            console.error("Error submitting application:", err);
            alert("Something went wrong while saving your application.");
        }

        
    };
    return(
        <>
            
            <div className="flex flex-col gap-6 p-50">
            {/* Return button */}
            <div className="flex items-center justify-between w-full">
                <button
                    onClick={() => navigate("/")}
                    className="text-black flex flex-row items-center border border-gray-300 w-50 py-2 px-4 shadow-lg rounded-xl cursor-pointer"
                >
                    <FaLongArrowAltLeft className="text-black text-3xl"/>
                    <span>Back to Dashboard</span>
                </button>
                <button>
                    <LogoutButton
                    className="text-black flex flex-row items-center border border-gray-300 w-50 py-2 px-4 shadow-lg rounded-xl cursor-pointer"
                    />
                </button>
                </div>
                

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
                        <div className="flex flex-row gap-1">
                            <label className="flex flex-row items-centre">
                            <FaBuilding className=" text-black text-4xl"/>
                                <span>Company Name *</span>
                                <input
                                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
                                    placeholder="Enter Company Name..."
                                    type="text"
                                    required
                                    value={formData.companyName}
                                    onChange={(e) =>handleInputChange("companyName", e.target.value)}
                                    />
                            </label>

                            <label className="flex flex-row items-center">
                                <FaAddressBook className="text-4xl"/>
                                <span>Contact Person *</span>
                                <input
                                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
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
                            className="flex flex-col gap-1.5 border border-gray-300 rounded-lg w-2xl p-3 h-30  focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
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
                                    className=" flex flex-col gap-2 border border-gray-300 rounded-lg w-2xl p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
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
                                className=" flex flex-col border border-gray-300 rounded-lg w-2xl h-28 p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
                                placeholder="Enter any notes"
                                type="text"
                                value={formData.notes}
                                onChange={(e)=> handleInputChange("notes", e.target.value)}
                            />
                        </label>
                        </div>

                        {/* Contact information section */}
                        <h3 className="text-sm font-semibold text-gray-700 mb-1">Company Information</h3>
                        <div>
                            <label className="flex items-center">
                            <FaPhoneAlt className="text-4xl" />
                            <span>Contact Number</span>
                            <input
                                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
                                placeholder="Add Contact Numbers..."
                                type="numbers"
                                value={formData.contactNumber}
                                onChange={(e)=> handleInputChange("contactNumber", e.target.value)}
                                />
                            </label>

                            <label className="flex items-center">
                            <MdEmail className="text-4xl"/>
                                <span>Email</span>
                                <input
                                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
                                    placeholder="Enter Email..."
                                    type="email"
                                    value={formData.companyEmail}
                                    onChange={(e)=> handleInputChange("companyEmail", e.target.value)}
                                />
                            </label>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-700 mb-1">Company Information</h3>
                                <label>
                                    <h5>Current Status *</h5>
                                    <select
                                        className="border w-2xl cursor-pointer border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-200"
                                        value={formData.status}
                                        onChange={(e)=> setFormData({...formData, status: e.target.value})}
                                    >
                                    <option value="" disabled>
                                        Select Status
                                    </option>
                                        <option value="rejected">Rejected</option>
                                        <option value="offer" className="bg-green-500">Offer</option>
                                        <option value="pending">Pending</option>
                                        <option value="interview">Interview</option>
                                    </select>
                                </label>
                            </div>                            
                        </div>
                        <button type="submit" className=" block cursor-pointer w-50 bg-black text-white rounded mt-2.5">Submit Application</button>
                    </form>
                </div>
                </div>
    
            </div>
  </>
    );

}