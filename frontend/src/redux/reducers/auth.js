import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
let user;
if (localStorage.getItem("token")) {
  user = jwt_decode(localStorage.getItem("token"));
}
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    user: user ? user : {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
