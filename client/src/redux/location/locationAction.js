import axios from 'axios';

export const registerLocation = (locationData) => {
  return (dispatch) => {
    axios.post('http://localhost:8080/location/register-location', locationData)
      .then((response) => {
        dispatch({ type: 'REGISTER_LOCATION_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'REGISTER_LOCATION_ERROR', payload: error });
      });
  };
};


export const getLocation = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/location/all-locations')
      .then((response) => {
        dispatch({ type: 'GET_LOCATION_SUCCESS', payload: response.data });
        // console.log(response.data)
      })
      .catch((error) => {
        dispatch({ type: 'GET_LOCATION_ERROR', payload: error });
      });
  };
};