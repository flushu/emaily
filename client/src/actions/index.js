import axios from "axios"; // library to call AJAX
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return dispatch => {
    axios
      .get("/api/current_user") // call get request to back-end
      .then(res =>
        dispatch({
          type: FETCH_USER,
          payload: res
        })
      );
  };
};
