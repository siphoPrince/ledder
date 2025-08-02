import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
    };

    return(
        <>
            <div className="flex flex-col gap-5">
            <button
                onClick={() => navigate("/")}
                className="text-black w-32 shadow-2xl rounded-2xl">
                Return
            </button>
            </div>
            
            <h2 className="font-bold">Add New Application</h2>
            <small>Enter the details of your job application</small>
            
            <div  className="shadow-lg">
                <h5 className="font-semibold">Application Details</h5>
                <small>Fill in all the relevant information about your job application</small>
            </div>
        </>

    );

}