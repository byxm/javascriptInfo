export const fetchData = () => {
  return (dispatch) => {
    fetch("/api/v1/users").then((res) => {
      dispatch({ type: "createNumber" });
    });
  };
};
