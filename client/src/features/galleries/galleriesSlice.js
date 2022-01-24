import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGalleries = createAsyncThunk(
  "galleries/fetchGalleries",
  async () => {
    const r = await fetch("/api/galleries");
    const galleries = await r.json();
    return galleries;
  }
);

export const fetchUserGalleries = createAsyncThunk(
  "galleries/fetchUserGalleries",
  async () => {
    const r = await fetch("/api/user/galleries");
    const myGalleries = await r.json();
    return myGalleries;
  }
);

export const fetchSinglePhoto = createAsyncThunk(
  "galleries/fetchSinglePhoto",
  async (id) => {
    const r = await fetch(`/api/galleries/${id}`);
    const photo = await r.json();
    return photo;
  }
);

const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
    myPhotos: [],
    singlePhoto: {},
    status: "idle",
  },
  reducers: {
    resetPopularGalleries(state) {
      state.galleries = [];
    },
    resetSinglePhoto(state) {
      state.singlePhoto = {};
    },
  },
  extraReducers: {
    [fetchGalleries.pending](state) {
      state.status = "loading";
    },
    [fetchGalleries.fulfilled](state, action) {
      state.galleries = action.payload;
    },
    [fetchSinglePhoto.pending](state) {
      state.status = "loading";
    },
    [fetchSinglePhoto.fulfilled](state, action) {
      state.singlePhoto = action.payload;
      state.status = "idle";
    },
    [fetchUserGalleries.pending](state) {
      state.status = "loading";
    },
    [fetchUserGalleries.fulfilled](state, action) {
      state.myPhotos = action.payload;
      state.status = "idle";
    },
  },
});

export const { resetPopularGalleries, resetSinglePhoto } =
  galleriesSlice.actions;

export default galleriesSlice.reducer;
