import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const userData = useSelector((state) => state.getAllUserDataReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("jwt");
    navigate("/");
  };

  return (
    <header>
      <div id="header">
        <div className="logo">
          <em>
            <Link to={"/"}>Pointer Calculator</Link>
          </em>
        </div>

        <nav className="adminPageNav">
          <p onClick={handleLogout} style={{ cursor: "pointer" }}>
            logout
          </p>
          <div className="userImageAndInfo">{userData?.data?.fullName}</div>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
