import { fetchEvents } from "../../features/events/eventsSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MiniEventCards from "./MiniEventCards";
import "../../styles/event.css";

function EventList() {
  const events = useSelector((state) => state.events.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const eventsToBeSorted = [...events];
  const sortedEvents = eventsToBeSorted.sort(
    (a, b) => b.hash_count - a.hash_count
  );

  return (
    <div className="mini-cards-container">
      <div className="event-list-container">
        {sortedEvents.map((event) => (
          <MiniEventCards key={event.id} event={event} />
        ))}
      </div>
      <button id="show-more-button">Show more</button>
    </div>
  );
}

export default EventList;
