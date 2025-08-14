import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa"
import { FaAddressBook } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const OverView = ({ applications }) => {
  return (
    <>   
      <h2 className="text-lg font-bold mb-4">Your Applications</h2>

      {applications.length === 0 ? (
        <div className=" p-5 text-gray-500 italic flex flex-col items-center">
        <FaBuilding className="text-6xl text-black"/>
          <span>No applications yet. Start by adding one!</span>
          <h4>Start tracking your job applications by adding your first one.</h4>
          <Link
            className="ml-2 bg-black text-white px-3 py-1 rounded-xl"
            to="/application-form"
          >
            Add Application
          </Link>
        </div>
      ) : (
        <section className="w-full flex mt-6 ">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-3xl ">
            {applications.map((app, i) => (
              <div
                key={i}
                className="shadow-lg w-full rounded p-4 flex flex-col sm:flex-row justify-between bg-white border border-gray-300"
              >
                <div>
                  <h3 className="text-black font-semibold">{app.jobTitle}</h3>
                  <p className="text-gray-600 flex flex-row items-center text-xs sm:text-sm"><FaBuilding className="sm:text-2xl text-black"/>{app.companyName}</p>
                  <p className="text-gray-600 flex flex-row items-center text-xs sm:text-sm"><IoMdPerson className="sm:text-2xl text-black"/>{app.contactPerson}</p>
                  <p className="text-gray-600 flex flex-row items-center text-xs sm:text-sm"><MdEmail className="sm:text-2xl text-black"/>{app.companyEmail}</p>
                  <p className="text-gray-500 italic flex flex-row items-centre text-xs sm:text-sm"><MdEditNote className="sm:text-2xl text-black"/>{app.notes}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{app.aboutCompany}</p>
                  
                </div>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-2xl mt-2 sm:mt-0 self-start">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
          </section>    
      )}      
    </>
  );
};

export default OverView;
