import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    const r = await fetch("/api/favorites");
    const favs = await r.json();
    return favs;
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    status: "idle",
  },

  reducers: {
    onDeleteFav(state, action) {
      state.favorites = state.favorites.filter((f) => f.id !== action.payload);
    },
    onAddFav(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    resetFavorite(state) {
      state.favorites = [];
    },
  },
  extraReducers: {
    [fetchFavorites.pending](state) {
      state.status = "loading";
    },
    [fetchFavorites.fulfilled](state, action) {
      state.favorites = action.payload;
    },
  },
});

export const { onDeleteFav, onAddFav, resetFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
