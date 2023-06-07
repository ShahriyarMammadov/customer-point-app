//------------------ Get User ------------------
export const getUserAllDataAction = (userData) => {
  try {
    return (dispatch) => {
      dispatch({
        type: "PENDING",
      });
      dispatch({
        type: "FULFILLED",
        payload: userData,
      });
    };
  } catch (error) {}
};
