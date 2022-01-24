import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import eventsReducer from "./features/events/eventsSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";
import hashtagsReducer from "./features/hashtags/hashtagsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    events: eventsReducer,
    favorites: favoritesReducer,
    hashtags: hashtagsReducer,
  },
});

export default store;
