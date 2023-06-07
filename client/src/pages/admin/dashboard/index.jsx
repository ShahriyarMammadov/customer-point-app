import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../../components/loading";
import TableComponent from "../../../components/table";
import "./index.scss";

const DashBoard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [allUserData, setAllUserData] = useState([]);
  const [transactionPoint, setTransactionPoint] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [transactions, setTransactions] = useState([]);

  const userData = useSelector((state) => state.getAllUserDataReducer);
  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString()
  );

  const checkAdmin = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/checkAdmin`,
        {},
        {
          withCredentials: true,
        }
      );

      if (data?.status) {
        setLoading(false);
        setAllUserData(data.allUserData);
      } else {
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);

  const transactionsAdded = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:3000/transactionsAdded`,
        {
          email: userEmail,
          newTransaction: +transactionPoint,
          date: transactionDate,
        }
      );

      alert(data?.message);
    } catch (error) {
      alert(error);
    }
  };

  const handleCheckUserPoint = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:3000/getUserPoint`, {
        email: userEmail,
      });
      setTransactions(data.transactions);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div id="dashboard">
          <div className="dashboard">
            <div className="headText">
              <h1>Welcome to Dashboard {userData?.data?.fullName}</h1>
            </div>

            <div className="allData">
              <div className="headText">
                <h2>All Site Users</h2>
              </div>
              <TableComponent data={allUserData} />
            </div>
            <div className="headText">
              <h2>Added User Point</h2>
            </div>
            <div className="transactionAdded">
              <form
                action=""
                onSubmit={(e) => {
                  transactionsAdded(e);
                }}
              >
                <input
                  type="email"
                  placeholder="user's email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="point"
                  onChange={(e) => {
                    setTransactionPoint(e.target.value);
                  }}
                />
                <button type="submit">Add</button>
              </form>
            </div>

            <div className="checkUserPoint">
              <div className="headText">
                <h2>Check User point</h2>
              </div>
              <form
                action=""
                onSubmit={(e) => {
                  handleCheckUserPoint(e);
                }}
              >
                <input
                  type="email"
                  placeholder="Enter user's email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
                <button type="submit">Check</button>
              </form>
            </div>

            <div className="transActions">
              {transactions.map((element, index) => {
                return (
                  <div key={index} className="transactionsAbout">
                    <p>TransactionDate: {element?.date}</p>
                    <span>Point: {element?.transaction}</span>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
