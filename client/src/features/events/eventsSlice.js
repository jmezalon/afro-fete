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

// export const fetchSingleTag = createAsyncThunk(
//   "events/fetchSingleTag",
//   async (id) => {
//     const r = await fetch(`/api/hashtags/${id}`);
//     const tag = await r.json();
//     return tag;
//   }
// );

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    entities: [],
    event: {},
    // singleTag: {},
    status: "idle",
    isEvents: true,
  },
  reducers: {
    showEvents(state, action) {
      state.isEvents = action.payload;
    },
    // resetSingleTag(state) {
    //   state.singleTag = {};
    // },
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
    // [fetchSingleTag.pending](state) {
    //   state.status = "loading";
    // },
    // [fetchSingleTag.fulfilled](state, action) {
    //   state.singleTag = action.payload;
    //   state.status = "idle";
    // },
  },
});

export const { showEvents, resetSingleTag } = eventsSlice.actions;
export default eventsSlice.reducer;
