import { TOGGLE_SIDEBAR } from "../actions/types";

const initialState = {
  sideBarExpanded: true
};

// Export
export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sideBarExpanded: !state.sideBarExpanded
      };
    default:
      return state;
  }
}
