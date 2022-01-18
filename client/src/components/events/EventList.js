import { fetchEvent, fetchEvents } from "../../features/events/eventsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MiniEventCards from "./MiniEventCards";
import "../../styles/event.css";
import EventCard from "./EventCard";
import TrendingHash from "./TrendingHash";

function EventList() {
  const events = useSelector((state) => state.events.entities);
  const isEvents = useSelector((state) => state.events.isEvents);
  const singleEvent = useSelector((state) => state.events.event);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  // need to get the show more button to work

  const popularHash = events.length > 0 && events[1].hashtags;

  const eventsToBeSorted = [...events];
  let sortedEvents;

  if (!params.id) {
    sortedEvents = eventsToBeSorted.sort((a, b) => b.hash_count - a.hash_count);
  } else {
    sortedEvents = events.filter(
      (event) => event.event_category_id === parseInt(params.id)
    );
  }

  const calenderFilter = ["TODAY", "TOMORROW", "THIS WEEKEND", "THIS MONTH"];

  const marginLeft = params.type ? "-29.5%" : "";
  const marginLeftHr = params.type ? "17%" : "";

  function handleSingleEventClick(id) {
    dispatch(fetchEvent(id));
  }

  return (
    <div className="event-list--and-ul-container">
      <ul className={params.type ? "cat-calender-filter" : "calender-filter"}>
        {calenderFilter.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      {isEvents ? (
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
              <MiniEventCards
                key={event.id}
                event={event}
                pt={params.type}
                handleSingleEventClick={handleSingleEventClick}
              />
            ))}
          </div>
          <button id="show-more-button" style={{ marginLeft: `${marginLeft}` }}>
            Show more
          </button>
        </div>
      ) : (
        <EventCard event={singleEvent} />
      )}
      <hr style={{ marginLeft: `${marginLeftHr}`, marginBottom: "6%" }} />
      <TrendingHash popularHash={popularHash} pt={params.type} />
    </div>
  );
}

export default EventList;
