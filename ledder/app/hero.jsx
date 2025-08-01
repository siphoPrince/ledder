import { useState } from 'react';
import ApplicationForm from '../app/components/application-form'

const Hero = () => {
    const [showForm, setShowForm] = useState(false);
    
    return (
        <>
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Ledder</h1>
            <button className="flex flex-row items-center gap-2 bg-black rounded text-white px-4 py-2 cursor-pointer"
                onClick={() => setShowForm(true)}>
            + Add Application
            </button>

            {showForm && (<ApplicationForm onCancel={() => setShowForm(false)}/>)}
        </div>
        <p className="text-gray-500 text-xl">Track your job applications and never miss an opportunity</p>
        </>
    );
  };
  
  export default Hero;
  