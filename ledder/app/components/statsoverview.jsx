import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OverView = () => {
    const navigate = useNavigate();
    const applications = []; // later you'll fetch or pass this as props
  
    return (
      <>
        <h2 className="text-lg font-bold mb-4">Your Applications</h2>
  
        {applications.length === 0 ? (
          <div className="p-2/5 text-gray-500 italic">
            No applications yet. Start by adding one!
            <Link 
                className="bg-black text-white rounded-xl"
                to={"/application-form"}
            >
                Add Application
            </Link>
          </div>
          
        ) : (
          applications.map((app, i) => (
            <div key={i} className="shadow-lg w-4xl rounded p-4 mb-2 flex items-center justify-between">
              <span>{app.title}</span>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-2xl">
                {app.status}
              </span>
            </div>
          ))
        )}
      </>
    );
  };
  
  export default OverView;
  