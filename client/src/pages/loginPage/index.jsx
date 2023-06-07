import React, { useState } from "react";
import loginImage from "../../assets/images/air.svg";
import "./index.scss";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:3000/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      setErrors(data.errors);

      if (data?.data?.position === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/admin/");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="loginPage">
      <Helmet>
        <title>Login | Point Calculator</title>
      </Helmet>
      <div className="loginPage">
        <section>
          <div className="loginForm">
            <form
              action=""
              onSubmit={(e) => {
                handleLogin(e);
              }}
            >
              <input
                type="email"
                required
                placeholder="your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors?.email ? errors.email : null}
              <input
                type="password"
                required
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors?.password ? errors.password : null}

              <button type="submit">Login</button>
            </form>
          </div>
          <div className="image">
            <img src={loginImage} alt="login" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
