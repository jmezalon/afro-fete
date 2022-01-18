import { fetchEvents } from "../../features/events/eventsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MiniEventCards from "./MiniEventCards";
import "../../styles/event.css";

function EventList() {
  const events = useSelector((state) => state.events.entities);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  // need to filter events when it is a single category, filter base on the id which i have in the params

  const eventsToBeSorted = [...events];
  const sortedEvents = eventsToBeSorted.sort(
    (a, b) => b.hash_count - a.hash_count
  );

  const calenderFilter = ["TODAY", "TOMORROW", "THIS WEEKEND", "THIS MONTH"];

  return (
    <div className="event-list--and-ul-container">
      <ul className={params.type ? "cat-calender-filter" : "calender-filter"}>
        {calenderFilter.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      <div
        className={
          params.type ? "cat-mini-cards-container" : "mini-cards-container"
        }
      >
        <div
          className={
            params.type ? "cat-event-list-container" : "event-list-container"
          }
        >
          {sortedEvents.map((event) => (
            <MiniEventCards key={event.id} event={event} />
          ))}
        </div>
        <button id="show-more-button">Show more</button>
      </div>
    </div>
  );
}

export default EventList;
