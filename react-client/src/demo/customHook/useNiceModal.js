import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function showModal(modalId, args) {
  return {
    type: "nice-modal/show",
    payload: {
      modalId,
      args,
    },
  };
}

function hideModal(modalId, force) {
  return {
    type: "nice-modal/hide",
    payload: {
      modalId,
      force,
    },
  };
}

const resultObj = {};

const useNiceModal = (modalId) => {
  const dispatch = useDispatch();
  const show = useCallback(
    (args) => {
      return new Promise((resolve) => {
        resultObj[modalId] = resolve;
        dispatch(showModal(modalId, args));
      });
    },
    [dispatch, modalId]
  );

  const hide = useCallback(
    (force) => {
      dispatch(hideModal(modalId, force));
    },
    [dispatch, modalId]
  );

  const state = useSelector((s) => s.modalReducer);
  const args = state[modalId];
  const hiding =
    state.hiding[modalId] === undefined ? true : state.hiding[modalId];

  return { args, hiding, visible: !!args, show, hide, resultObj };
};

export default useNiceModal;
