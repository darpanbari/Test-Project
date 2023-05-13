import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { getAttendance } from "../redux/attendance/attendanceAction.js";
import { getLocation } from "../redux/location/locationAction.js";

function AllUsers() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [locationId, setLocationId] = useState("");

  const dispatch = useDispatch();
  const attendance = useSelector(
    (state) => state.attendanceState.attendance.data || []
  );
  const error = useSelector((state) => state.attendanceState.error);

  const handleGetAttendance = () => {
    dispatch(getAttendance({ fromDate, toDate, locationId }));
  };

  //get location
  const location = useSelector((state) => state?.locationState?.location?.data);
  console.log(location);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  const dateArr = [
    "01/05/2023",
    "02/05/2023",
    "03/05/2023",
    "04/05/2023",
    "05/05/2023",
    "06/05/2023",
    "07/05/2023",
    "08/05/2023",
    "09/05/2023",
    "10/05/2023",
  ];

  return (
    <>
      <div className="container-fluid dashboard" >
        <div className="row">
          <div className="col-lg-2 col-md-7 justify-content-center dash-position">
            <Nav />
          </div>
          <div
            className="col-lg-10 col-md-6 bg-white shadow-sm my-5 dash w-75 margin"
            style={{ marginLeft: "20%", background:"#F2F8FF" }}
          >
            <h1 className="text-center mt-5 fst-italic text-white bgcolor-2 py-4">
              Monthly Attendance
            </h1>

            <div className="my-5 mx-1">
              {/* <h2>Attendance Dashboard</h2> */}
              <div className="d-flex align-items-center mx-5 px-5 justify-content-center">
                <div className="input-group">
                  <label htmlFor="fromDate" className="px-4">
                    From Date:
                  </label>
                  <input
                    type="date"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="toDate" className="px-4">
                    To Date:
                  </label>
                  <input
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="locationId" className="px-4">
                    Location:
                  </label>
                  <select
                    id="locationId"
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                  >
                    {location?.map((l) => (
                      <option key={l._id} value={l._id}>
                        {l.locationName}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="w-75" onClick={handleGetAttendance}>
                  Get Attendance
                </button>
              </div>
              {error && <div className="error">{error}</div>}
              {
                <div className="w-100 px-0">
                  <table className="table table-bordered my-5">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col" className="hide">
                          User ID
                        </th>
                        <th scope="col">FullName</th>
                        <th scope="col">Location</th>
                        {dateArr.map((a, i) => (
                          <th key={i} scope="col">
                            {new Date(a).toLocaleDateString()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {attendance.map((u, i) => (
                        <tr key={u._id}>
                          <td>{i + 1}</td>
                          <td className="hide">{u._id}</td>
                          <td>{u.userFullName}</td>
                          <td>{u.Location}</td>

                          {dateArr.map((dateStr, j) => {
                            const date = new Date(dateStr);
                            const formattedDate = date.toLocaleDateString();
                            const aSts = u.userAttendance.find(
                              (a) =>
                                new Date(a.date).toLocaleDateString() ===
                                formattedDate
                            );
                            return (
                              <td key={j}>
                               {aSts ? aSts.createdAs : "A"}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllUsers;
