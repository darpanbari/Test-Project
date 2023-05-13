import React, { useState } from "react";
import "../../src/styles/AuthStyles.css";
import Nav from "../components/Nav";
import { registerUser } from '../redux/user/userAction.js';
import { useDispatch, useSelector } from 'react-redux';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    username: '',
    department: '',
    designation: '',
    password: '',
    locationId: '',
    userId: '',
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userState);
  console.log(state)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // registerUser(formData);
    dispatch(registerUser(formData));
    setFormData({
      firstName: '',
      surname: '',
      email: '',
      username: '',
      department: '',
      designation: '',
      password: '',
      locationId: '',
      userId: '',
    });
    alert("user successfully register!")
  };

  return (
    <>
      <div className="container-fluid dashboard ">
        <div className="row ">
          <div className="col-lg-2 col-md-7 justify-content-center dash-position">
            <Nav />
          </div>
          <div
            className="col-lg-10 col-md-6 my-5 w-50 dash margin"
            style={{ marginLeft: "32%" }}
          >
            {/* <h1 className="text-center mt-5 fst-italic text-white bgcolor-2 py-4">REGISTER FORM</h1>    */}
            <div
              className="form-container user-form"
              style={{ minHeight: "90vh" }}
            >
              <form onSubmit={handleSubmit}>
                <h4 className="title">REGISTER USER</h4>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <label htmlFor="surname">Surname:</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />

                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label>Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <label htmlFor="department">Department:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />

                <label htmlFor="designation">Designation:</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                />

                <label htmlFor="userId">User ID:</label>
                <input
                  type="number"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                />

                <label htmlFor="locationId">Location ID:</label>
                <input
                  type="text"
                  id="locationId"
                  name="locationId"
                  value={formData.locationId}
                  onChange={handleChange}
                />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
