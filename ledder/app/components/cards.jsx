const Cards = ()=> {
    return(
        <>
        <div className="flex flex-wrap gap-4 justify-between">
            <div className="flex-1 min-w-[150px] h-32 bg-blue-200 rounded-2xl p-4">
                <h6>Total applications</h6>
                <span>2</span>
            </div>
            <div className="flex-1 min-w-[150px] h-32 bg-red-200 rounded-2xl p-4">
                <h6>Pending</h6>
                <span className="text-red-500">0</span>
            </div>
            <div className="flex-1 min-w-[150px] h-32 bg-pink-200 rounded-2xl p-4">
                <h6>Interviews</h6>
                <span className="text-pink-500">5</span>
            </div>
            <div className="flex-1 min-w-[150px] h-32 bg-yellow-200 rounded-2xl p-4">
                <h6>Accepted</h6>
                <span className="text-yellow-500">1</span>
            </div>
            <div className="flex-1 min-w-[150px] h-32 mb-1.5 bg-green-300 rounded-2xl p-4">
                <h6>Rejected</h6>
                <span className="text-gray-500">0</span>
            </div>
        </div>

        </>
    );
}

export default Cards;