import { createStore } from "redux";

export const TOGGLE_MODAL = "TOGGLE_MODAL";
const initialState = {
  modal: { isShow: false },
};

/**
 * fdfsdf
 * @param {*} state : dfsdfs
 * @param {*} action
 * @returns
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          isShow: !state.modal.isShow,
        },
      };
    case "TOGGLE_END": {
      return {
        ...state,
        modal: {},
      };
    }
  }
};

const store = createStore(rootReducer);
export default store;
