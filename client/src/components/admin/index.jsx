import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserAllDataAction } from "../../redux/action/userAction";
import AdminHeader from "../../layouts/admin/header";

const AdminRoot = () => {
  const [data, setData] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/",
          {},
          {
            withCredentials: true,
          }
        );
        setData(data);

        if (!data?.status) {
          removeCookie("jwt");
          navigate("/login");
        } else {
          await dispatch(getUserAllDataAction(data.data));
        }
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminRoot;
