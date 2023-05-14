import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="container mx-auto px-4">
            <progress className="progress w-56"></progress>
        </div >
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;