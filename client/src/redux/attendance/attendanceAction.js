import axios from "axios";

export const getAttendance = ({fromDate, toDate, locationId}) => {
    return (dispatch) => {
      axios
        .get(`http://localhost:8080/attendance/monthly-attendance/${fromDate}/${toDate}/${locationId}`)
        .then((response ) => {
          dispatch({ type: "GET_ATTENDANCE_SUCCESS", payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: "GET_ATTENDANCE_ERROR", payload: error.message });
        });
    };
  };