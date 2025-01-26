

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProviders";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserRole from "./privateRoutes/UserRole";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);
    const {role} = UserRole()

    if (loading || userInfo === null) {
        return <div>Loading...</div>;  
    }
    console.log(role)

    if (role !=="admin"  ) {
        return <Navigate to="/" replace state={{ from: window.location.pathname }} />;
    }else{

        return children;
    }
};

export default ProtectedRoute;
