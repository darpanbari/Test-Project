import React, { useState } from "react";
import { login } from "../redux/user/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const userState = useSelector((state) => state.userState);
  const isAuthenticated = userState.isAuthenticated;
  const error = userState.error;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  if (isAuthenticated) {
    Navigate("/attendance");
    return null;
  }

  return (
    <>
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Enter Your Username "
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
        {error && (
          <div className="error fs-3 text-danger my-3 fst-italic">
            Please Enter valid username and password
          </div>
        )}
      </div>
    </>
  );
}

export default LoginUser;
