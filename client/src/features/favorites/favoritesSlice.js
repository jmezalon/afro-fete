import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    const r = await fetch("/api/favorites");
    const favs = await r.json();
    return favs;
  }
);

// export const postFavorites = createAsyncThunk(
//   "favorites/postFavorites",
//   async (fav) => {
//     const r = await fetch("/api/favorites", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(fav),
//     });
//     const data = await r.json();
//     return data;
//   }
// );

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
  },
  extraReducers: {
    [fetchFavorites.pending](state) {
      state.status = "loading";
    },
    [fetchFavorites.fulfilled](state, action) {
      state.favorites = action.payload;
    },
    // [postFavorites.pending](state) {
    //   state.status = "loading";
    // },
    // [postFavorites.fulfilled](state, action) {
    //   console.log(action.payload, "before");
    //   state.favorites = action.payload;
    //   console.log(state.favorites, "after");
    //   state.status = "idle";
    // },
  },
});

export const { onDeleteFav, onAddFav } = favoritesSlice.actions;

export default favoritesSlice.reducer;
