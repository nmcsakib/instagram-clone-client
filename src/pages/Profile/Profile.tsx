import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router";

const Profile = () => {
    const auth = useContext(AuthContext)

    return (
        <div>
            This is profile
            {
                auth?.user ? <button onClick={auth?.logOut} className="btn btn-success">Log Out</button> : <Link to='/accounts/login' className="btn btn-success">Log In</Link>
            }
        </div>
    );
};

export default Profile;