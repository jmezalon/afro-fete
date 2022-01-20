import { fetchEvent, fetchEvents } from "../../features/events/eventsSlice";
import { useEffect, useState } from "react";
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
  const [popularHash, setPopularHash] = useState([]);
  let [count, setCount] = useState(3);
  let [showLess, setShowLess] = useState(false);
  // const [singleTag, setSingleTag] = useState({});
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const filterTags = popularHash.filter((tag) => tag.events.length > 2);

  // function handleTagClick(id) {
  //   fetch("/api/hashtags/" + id)
  //     .then((r) => r.json())
  //     .then(setSingleTag)
  // }

  // need to get the show more button to work

  useEffect(() => {
    fetch("/api/hashtags")
      .then((r) => r.json())
      .then(setPopularHash);
  }, []);

  const eventsToBeSorted = [...events];
  let sortedEvents = [];

  if (count <= eventsToBeSorted.length) {
    for (let i = 0; i < count; i++) {
      sortedEvents.push(eventsToBeSorted[i]);
    }
  }

  if (!params.id) {
    sortedEvents.sort((a, b) => b.hash_count - a.hash_count);
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

  function handleMoreClick() {
    if (count + 3 <= eventsToBeSorted.length) {
      setCount(count + 3);
    } else {
      setCount(eventsToBeSorted.length);
      setShowLess(true);
    }
  }

  // function scrollTop() {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  return (
    <div id="top" className="event-list--and-ul-container">
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
          {sortedEvents.length >= count && !params.type && !showLess && (
            <button
              onClick={handleMoreClick}
              id="show-more-button"
              style={{ marginLeft: `${marginLeft}` }}
            >
              Show more
            </button>
          )}
          {showLess && (
            <a href="#top">
              <button
                onClick={() => {
                  setCount(3);
                  setShowLess(false);
                }}
                id="show-more-button"
                style={{ marginLeft: `${marginLeft}` }}
              >
                Show less
              </button>
            </a>
          )}
        </div>
      ) : (
        <EventCard event={singleEvent} />
      )}
      <hr style={{ marginLeft: `${marginLeftHr}`, marginBottom: "6%" }} />
      <TrendingHash popularHash={filterTags} pt={params.type} />
    </div>
  );
}

export default EventList;
