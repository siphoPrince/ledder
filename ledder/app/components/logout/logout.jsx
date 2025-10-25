import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () =>{
    const navigate = useNavigate();

    const handleLogout = async () =>{
        try{
            await axios.post(
                "http://localhost:3000/api/auth/logout",
                {},
                {withCredentials: true}
            );
            navigate("login");
        } catch(err){
            console.error("Logout failed", err);
        }
    };

    return(
        <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
        Logout
        </button>
    );
}

export default LogoutButton;