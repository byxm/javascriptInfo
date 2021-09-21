const initialCountState = { value: 0 };

const counterReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case "createNumber":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

const modalReducer = (state = { hiding: {} }, action) => {
  switch (action.type) {
    case "nice-modal/show": {
      const { modalId, args } = action.payload;
      console.log('nice-modal-showwwwwwwwww', modalId, args)
      return {
        ...state,
        [modalId]: args || true,
        hiding: {
          ...state.hiding,
          [modalId]: false,
        },
      };
    }
    case "nice-modal/hide": {
      const { modalId, force } = action.payload; // 只有 force 时才真正移除对话框
      return force
        ? { ...state, [modalId]: false, hiding: { [modalId]: false } }
        : { ...state, hiding: { [modalId]: true } };
    }
    default:
      return state;
  }
};

export { counterReducer, modalReducer };
