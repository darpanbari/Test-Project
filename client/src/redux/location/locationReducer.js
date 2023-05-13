const initialState = {
    location: [],
    error: null,
  };
  
  const locationReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case "REGISTER_LOCATION_SUCCESS":
        return {
          ...state,
          location: action.payload.location,
          error: null,
        };
      case "REGISTER_LOCATION_ERROR":
        return {
          ...state,
          location: null,
          error: action.payload,
        };
  
      case "GET_LOCATION_SUCCESS":
        return {
          ...state,
          location: action.payload,
          error: null,
        };
      case "GET_LOCATION_ERROR":
        return {
          ...state,
          location: [],
          error: action.payload,
        };
        
      default:
        return state;
    }
    
  };
  
  export default locationReducer;