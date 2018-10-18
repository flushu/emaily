import axios from "axios"; // library to call AJAX
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  // axios
  //   .get("/api/current_user") // call get request to back-end
  //   .then(res =>
  //     dispatch({
  //       type: FETCH_USER,
  //       payload: res
  //     })
  //   );
  const res = await axios.get("/api/current_user");
  // res has config, data, headers, request, status, statusText, etc... we just need data
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
