const initialState = {
    attendance: [],
    error: null,
  };
  
  const attendanceReducer = (state = initialState, action) => {
   
    switch (action.type) {
      
      case "GET_ATTENDANCE_SUCCESS":
        return {
          ...state,
          attendance: action.payload,
          error: null,
        };
      case "GET_ATTENDANCE_ERROR":
        return {
          ...state,
          attendance: [],
          error: action.payload,
        };
        
      default:
        return state;
    }
    
  };
  
  export default attendanceReducer;