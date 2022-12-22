import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../../../hooks/http.hook";
import { Toast, ToastContainer } from "react-bootstrap";
import { dateNow } from "../../../date";
import { LoginContext } from "../../../context/loginContext";
import { baseUrl } from "../../../url";
// import axios from "../../../axios";
import "../style.css";

const Registration = () => {
  const { loading, request, error, clearError } = useHttp();
  const auth = useContext(LoginContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dateReg: dateNow(),
    dateLog: dateNow(),
    status: true,
  });
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (error) {
      setShow(true);
      setErrorMessage(error);
    }
    clearError();
  }, [error, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request(
        `${baseUrl}/api/auth/register`,
        "POST",
        {
          ...form,
        },
        {
          "Access-Control-Allow-Origin": "*",
        }
      );
      if (data) {
        const data = await request(
          `${baseUrl}/api/auth/login`,
          "POST",
          { ...form },
          {
            "Access-Control-Allow-Origin": "*",
          }
        );
        auth.login(data.token, data.userId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const registerHandler = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${baseUrl}/api/auth/register`,
  //       { ...form },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //         mode: "cors",
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="Auth-form-container">
      <ToastContainer position="top-end">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg="danger"
        >
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder="Enter Name"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={changeHandler}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={registerHandler}
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
