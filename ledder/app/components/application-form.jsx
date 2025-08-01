import { useState } from "react";

export default function ApplicationForm(){
    const [formData, setformData] = useState({
        companyName: "",
        contactPerson: "",
        jobTitle: "",
        notes: ""
    });


    // update the form input
    const handleInputChange = (field, value) =>{
        setformData((prev)=>({
            ...prev, [field]:value
        }));
    }

    // when form is submitted
    const handleSubmit = (e)=>{
        e.preventDefault();
        onCancel(); // cancel formShow
    };

    return(
        <>
            <div></div>
        </>
    );

}