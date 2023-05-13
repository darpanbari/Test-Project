import React, { useState } from "react";
import "../../src/styles/AuthStyles.css";
import Nav from "../components/Nav";
import { registerLocation } from '../redux/location/locationAction.js';
import { useDispatch, useSelector } from 'react-redux';

const RegistorLocation = () => {
  const [formData, setFormData] = useState({
    locationName: '',
    locationCode: '',
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state.locationState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // registerUser(formData);
    dispatch(registerLocation(formData));
    setFormData({
      locationName: '',
      locationCode: '',
    });
    alert("location successfully register!")
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
                <h4 className="title">REGISTER LOCATION</h4>
                <label htmlFor="locationName">Location Name:</label>
                <input
                  type="text"
                  id="locationName"
                  name="locationName"
                  value={formData.locationName}
                  onChange={handleChange}
                />

                <label htmlFor="locationCode">Location Code:</label>
                <input
                  type="text"
                  id="locationCode"
                  name="locationCode"
                  value={formData.locationCode}
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

export default RegistorLocation;
