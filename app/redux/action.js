import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE } from "../../utils/Constant";

export function addToFavorite(item) {
  return {
    type: ADD_TO_FAVORITE,
    payload: item,
  };
}

export function removeToFavorite(item) {
  return {
    type: REMOVE_TO_FAVORITE,
    payload: item,
  };
}
