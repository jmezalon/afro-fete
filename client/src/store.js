import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import eventsReducer from "./features/events/eventsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    events: eventsReducer,
  },
});

export default store;
