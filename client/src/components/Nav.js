import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="text-center mx-auto z-1">
        <div className="list-group dashboard-menu" >
          <h4 className="d-flex align-items-center fs-5 justify-content-center font-fam my-0" style={{height:"100px"}}>DASHBOARD</h4>

          <NavLink
            to="/attendance"
            className="list-group-item list-group-item-action pt-3"
          >
            Attendance
          </NavLink>
          
          <NavLink
            to="/register-user"
            className="list-group-item list-group-item-action pt-3"
          >
            Register User
          </NavLink>
          <NavLink
            to="/all-users"
            className="list-group-item list-group-item-action pt-3"
          >
            All Users
          </NavLink>
          <NavLink
            to="/register-location"
            className="list-group-item list-group-item-action pt-3"
          >
            Register Location
          </NavLink>
          <NavLink
            to="/all-locations"
            className="list-group-item list-group-item-action pt-3"
          >
           All Locations
          </NavLink>                
        
          <NavLink
          to="/"
            className="list-group-item border-1 hide-1"
            style={{height:"100vh", zIndex:"-2"}}
          > 
          </NavLink>
        
        </div>
      </div>
    </>
  );
};

export default Nav;
