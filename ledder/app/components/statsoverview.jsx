import { Link } from "react-router-dom";

const OverView = ({ applications }) => {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">Your Applications</h2>

      {applications.length === 0 ? (
        <div className="p-4 text-gray-500 italic">
          No applications yet. Start by adding one!
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
              <h3 className="text-black font-semibold">{app.companyName}</h3>
                <p className="text-grey-600 ">{app.jobTitle}</p>
                
              </div>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-2xl">
                {app.contactPerson}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default OverView;
