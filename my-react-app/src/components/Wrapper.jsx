// import { useContext } from "react";
// import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    // const { isLogin } = useContext(AuthContext);
    const isLogin = useSelector((state) => state.auth.isLogin);
    return isLogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;