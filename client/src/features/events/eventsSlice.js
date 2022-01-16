import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const r = await fetch("/api/events");
  const events = await r.json();
  return events;
});

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    entities: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchEvents.pending](state) {
      state.status = "loading";
    },
    [fetchEvents.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

// export const { } = eventsSlice.actions;
export default eventsSlice.reducer;
