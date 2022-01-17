import { fetchEvents } from "../../features/events/eventsSlice";
import { useEffect } from "react";
import "../../styles/event.css";
import { useSelector, useDispatch } from "react-redux";

function EventList() {
  const events = useSelector((state) => state.events.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const eventsToBeSorted = [...events];
  eventsToBeSorted.sort((a, b) => b.hash_count - a.hash_count);

  return (
    <div className="event-list-container">
      <p>list will go here</p>
      <button id="show-more-button">Show more</button>
    </div>
  );
}

export default EventList;
