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
      <div className="flex justify-center items-center h-100">

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
        <div className="">
          {applications.map((app, i) => (
            <div
              key={i}
              className="shadow-lg w-4xl rounded p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="text-black font-semibold">{app.jobTitle}</h3>
                <p className="text-gray-600 flex flex-row items-center"><FaBuilding className="text-4xl text-black"/>{app.companyName}</p>
                <p className="text-gray-600 flex flex-row items-center"><IoMdPerson className="text-4xl text-black"/>{app.contactPerson}</p>
                <p className="text-gray-600 flex flex-row items-center"><MdEmail className="text-4xl text-black"/>{app.companyEmail}</p>
                <p className="text-gray-500 italic flex flex-row items-centre"><MdEditNote className="text-4xl text-black"/>{app.notes}</p>
                <p className="text-gray-500">{app.aboutCompany}</p>
                
              </div>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-2xl">
                {app.contactPerson}
              </span>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
};

export default OverView;
