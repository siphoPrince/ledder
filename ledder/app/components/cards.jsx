import { Link } from "react-router-dom";


const Cards = ({ applications })=> {
    const total = applications.length;
    const pending = applications.filter(app => app.status === "pending").length;
    const interviews = applications.filter(app => app.status === "interview").length;
    const accepted = applications.filter(app => app.status === "offer").length;
    const rejected = applications.filter(app => app.status === "rejected").length;

    return(
        <>
        <div className="flex flex-wrap gap-4 justify-between">
            <Link to="/dashboard">
                <div className="flex-1 min-w-[150px] h-32 cursor-pointer bg-blue-200 rounded-2xl p-4">
                        <h6>Total applications - <span className="italic text-sm">DashBoard</span></h6>
                        <span>{total}</span>
                    </div>
            </Link>
            <div className="flex-1 min-w-[150px] h-32 bg-red-200 rounded-2xl p-4">
                <h6>Pending</h6>
                <span className="text-red-500">{pending}</span>
            </div>
            <div className="flex-1 min-w-[150px] h-32 bg-pink-200 rounded-2xl p-4">
                <h6>Interviews</h6>
                <span className="text-pink-500">{interviews}</span>
            </div>
            <div className="flex-1 min-w-[150px] h-32 bg-yellow-200 rounded-2xl p-4">
                <h6>Accepted</h6>
                <span className="text-yellow-500">{accepted}</span>
            </div>
            <div className="flex-1 min-w-[150px] h-32 mb-1.5 bg-green-300 rounded-2xl p-4">
                <h6>Rejected</h6>
                <span className="text-gray-500">{rejected}</span>
            </div>
        </div>

        </>
    );
}

export default Cards;