import React, { useState, useEffect } from "react";
import { useHttp } from "../../../hooks/http.hook";
import { Toast, ToastContainer } from "react-bootstrap";
import "../style.css";
import { useContext } from "react";
import { LoginContext } from "../../../context/loginContext";
import { baseUrl } from "../../../url";

const Login = () => {
  const auth = useContext(LoginContext);
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const loginHandler = async () => {
    try {
      const data = await request(`${baseUrl}/api/auth/login`, "POST", {
        ...form,
      });
      auth.login(data.token, data.userId);
    } catch (error) {}
  };
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
          <h3 className="Auth-form-title">Sign In</h3>
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
              onClick={loginHandler}
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

export default Login;
