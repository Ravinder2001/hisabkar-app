import { createSlice } from "@reduxjs/toolkit";

interface IntialState {
  id: string;
  name: string;
  token: string;
  isUser: boolean;
}
const initialState: IntialState = {
  id: "",
  name: "",
  token: "",
  isUser: true,
};

const authSlice = createSlice({
  initialState: initialState,
  name: "authSlice",
  reducers: {
    login: (state, action) => {
      let data = action.payload;
      state.id = data.id;
      state.name = data.name;
      state.token = data.token;
      state.isUser = true;
    },
    logout: (state, action) => {
      state.id = "";
      state.name = "";
      state.token = "";
      state.isUser = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
