import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import eventsReducer from "./features/events/eventsSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    events: eventsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
