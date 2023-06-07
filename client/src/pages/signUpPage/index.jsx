import React, { useState } from "react";
import "./index.scss";
import pay from "../../assets/images/pay.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:3000/register`,
        {
          email: email,
          password: password,
          fullName: fullName,
          position: "user",
        },
        {
          withCredentials: true,
        }
      );
      setErrors(data.errors);

      if (data?.created) {
        navigate("/login");
      } else {
        null;
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="signup">
      <div className="signup">
        <section>
          <div className="image">
            <img src={pay} alt="pay" />
          </div>
          <div className="signUpForm">
            <div className="headText">
              <p>SIGNUP</p>
            </div>
            <form
              action=""
              onSubmit={(e) => {
                handleSignup(e);
              }}
            >
              <input
                type="email"
                placeholder="Please enter your email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div>{errors.email ? errors.email : null}</div>
              <input
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div>{errors.password ? errors.password : null}</div>

              <input
                type="text"
                placeholder="Your Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />

              <button type="submit">Sign Up</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUpPage;
