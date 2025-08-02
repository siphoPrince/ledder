const Cards = ()=> {
    return(
        <>
            <div className="flex gap-2" p-15>
                <div className="w-1/4 h-32 bg-blue-50 rounded-2xl">
                    <h6>Total applications</h6>
                    <span>2</span>
                </div>
                <div className="w-1/4 h-32 bg-red-50 rounded-2xl">
                    <h6>Pending</h6>
                    <span className="text-red-500">0</span>
                </div>
                <div className="w-1/4 h-32 bg-pink-50 rounded-2xl">
                    <h6>Interviews</h6>
                    <span className="text-pink-500">5</span>
                </div>
                <div className="w-1/4 h-32 bg-yellow-50 rounded-2xl">
                    <h6>Accepted</h6>
                    <span className="text-yellow-500">1</span>
                </div>
            </div>
        </>
    );
}

export default Cards;