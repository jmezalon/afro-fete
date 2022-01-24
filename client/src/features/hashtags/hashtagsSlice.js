import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHashtags = createAsyncThunk(
  "hashtags/fetchHashtags",
  async () => {
    const r = await fetch("/api/hashtags");
    const favs = await r.json();
    return favs;
  }
);

export const fetchSingleTag = createAsyncThunk(
  "hashtags/fetchSingleTag",
  async (id) => {
    const r = await fetch(`/api/hashtags/${id}`);
    const tag = await r.json();
    return tag;
  }
);

const hashtagsSlice = createSlice({
  name: "hashtags",
  initialState: {
    hashtags: [],
    singleTag: {},
    status: "idle",
  },
  reducers: {
    resetPopularHash(state) {
      state.hashtags = [];
    },
    resetSingleTag(state) {
      state.singleTag = {};
    },
  },
  extraReducers: {
    [fetchHashtags.pending](state) {
      state.status = "loading";
    },
    [fetchHashtags.fulfilled](state, action) {
      state.hashtags = action.payload;
    },
    [fetchSingleTag.pending](state) {
      state.status = "loading";
    },
    [fetchSingleTag.fulfilled](state, action) {
      state.singleTag = action.payload;
      state.status = "idle";
    },
  },
});

export const { resetPopularHash, resetSingleTag } = hashtagsSlice.actions;

export default hashtagsSlice.reducer;
