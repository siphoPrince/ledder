import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between p-15">
      
        <h1 className="text-3xl font-bold flex flex-row">
          <img 
              src="/wooden-ladder-icon-vector.jpg" 
              alt="Ladder Icon" 
              className="w-10 h-10" 
          />Ledder</h1>
        <Link
          to="/application-form"
          className="flex flex-row items-center gap-2 bg-black rounded text-white px-4 py-2 cursor-pointer"
        >
          + Add Application
        </Link>
      </div>
      <p className="text-gray-500 text-xl">
        Track your job applications and never miss an opportunity
      </p>
    </>
  );
};

export default Hero;
