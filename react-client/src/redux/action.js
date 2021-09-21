export const fetchData = () => {
  return (dispatch) => {
    fetch("/api/v1/users").then((res) => {
      dispatch({ type: "createNumber" });
    });
  };
};

export function showModal(modalId, args) {
  return {
    type: "nice-modal/show",
    payload: { modalId, args },
  };
}


export function hideModal(modalId, force) {
  return {
    type: "nice-modal/hide",
    payload: { modalId, force },
  };
}


