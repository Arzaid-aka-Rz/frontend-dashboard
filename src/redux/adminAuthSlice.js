import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    loginData: null,
    loading: false,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null,
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
  },
});

export const { setLoading, setLoginData, setToken } =
  adminAuthSlice.actions;
export default adminAuthSlice.reducer;
