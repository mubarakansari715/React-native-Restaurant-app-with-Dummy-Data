import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE } from "../../utils/Constant";

const initialState = [];
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [...state, action.payload];
    case REMOVE_TO_FAVORITE:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
