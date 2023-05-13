import axios from "axios";

export const registerUser = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/user/register", userData)
      .then((response) => {
        dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "REGISTER_ERROR", payload: error });
      });
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/user/login", {username, password})
      .then((response ) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/user/get-user")
      .then((response) => {
        dispatch({ type: "GET_USER_SUCCESS", payload: response.data });
        // console.log(response.data)
      })
      .catch((error) => {
        dispatch({ type: "GET_USER_ERROR", payload: error });
      });
  };
};
