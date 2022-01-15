import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUser", async (user) => {
  const r = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const loggedUser = await r.json();
  return loggedUser;
});

export const signupUser = createAsyncThunk("users/signupUser", async (user) => {
  const r = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const newUser = await r.json();
  return newUser;
});

export const findMe = createAsyncThunk("users/findMe", async () => {
  const r = await fetch("/api/me");
  const user = await r.json();
  return user;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    status: "idle",
    errors: [],
  },

  reducers: {
    userUpdate(state, action) {
      state.user = action.payload;
    },
    userLogout(state) {
      state.user = null;
    },
  },
  extraReducers: {
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
      if (action.payload.errors) {
        state.errors = action.payload.errors;
        state.user = null;
      } else {
        state.user = action.payload;
        state.errors = [];
      }
      state.status = "idle";
    },
    [signupUser.pending](state) {
      state.status = "loading";
    },
    [signupUser.fulfilled](state, action) {
      if (action.payload.errors) {
        state.errors = action.payload.errors;
        state.user = null;
      } else {
        state.user = action.payload;
        state.errors = [];
      }
      state.status = "idle";
    },
    [findMe.fulfilled](state, action) {
      state.user = action.payload;
      state.status = "idle";
    },
  },
});

export const { userUpdate, userLogout } = usersSlice.actions;

export default usersSlice.reducer;
