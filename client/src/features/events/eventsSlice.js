import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const r = await fetch("/api/events");
  const events = await r.json();
  return events;
});

export const fetchEvent = createAsyncThunk("events/fetchEvent", async (id) => {
  const r = await fetch(`/api/events/${id}`);
  const event = await r.json();
  return event;
});

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    entities: [],
    event: {},
    status: "idle",
    isEvents: true,
  },
  reducers: {
    showEvents(state, action) {
      state.isEvents = action.payload;
    },
  },
  extraReducers: {
    [fetchEvents.pending](state) {
      state.status = "loading";
    },
    [fetchEvents.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [fetchEvent.pending](state) {
      state.status = "loading";
    },
    [fetchEvent.fulfilled](state, action) {
      state.event = action.payload;
      state.status = "idle";
    },
  },
});

export const { showEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
