import {
  fetchEvent,
  fetchEvents,
  fetchSingleTag,
  showEvents,
} from "../../features/events/eventsSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/event.css";
import EventCard from "./EventCard";
import TrendingHash from "./TrendingHash";
import MiniEventContainer from "./MiniEventContainer";

function EventList() {
  const events = useSelector((state) => state.events.entities);
  const isEvents = useSelector((state) => state.events.isEvents);
  const singleEvent = useSelector((state) => state.events.event);
  const [popularHash, setPopularHash] = useState([]);
  let [count, setCount] = useState(3);
  let [showLess, setShowLess] = useState(false);
  // const [singleTag, setSingleTag] = useState({});
  const singleTag = useSelector((state) => state.events.singleTag);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    fetch("/api/hashtags")
      .then((r) => r.json())
      .then(setPopularHash);
  }, []);

  const filterTags = popularHash.filter((tag) => tag.events.length > 2);

  function handleTagClick(id) {
    // fetch("/api/hashtags/" + id)
    //   .then((r) => r.json())
    //   .then(setSingleTag);
    dispatch(fetchSingleTag(id));

    !isEvents && dispatch(showEvents(true));
  }

  const eventsToBeSorted = [...events];

  const calenderFilter = ["TODAY", "TOMORROW", "THIS WEEKEND", "THIS MONTH"];

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

  const marginLeftHr = params.type ? "17%" : "";

  return (
    <div id="top" className="event-list--and-ul-container">
      <ul className={params.type ? "cat-calender-filter" : "calender-filter"}>
        {calenderFilter.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      {isEvents ? (
        <MiniEventContainer
          pt={params.type}
          handleSingleEventClick={handleSingleEventClick}
          count={count}
          showLess={showLess}
          handleMoreClick={handleMoreClick}
          setCount={setCount}
          setShowLess={setShowLess}
          events={events}
          eventsToBeSorted={eventsToBeSorted}
          singleTag={singleTag.events}
          id={params.id}
        />
      ) : (
        <EventCard event={singleEvent} handleTagClick={handleTagClick} />
      )}
      <hr style={{ marginLeft: `${marginLeftHr}`, marginBottom: "6%" }} />
      <TrendingHash
        popularHash={filterTags}
        pt={params.type}
        handleTagClick={handleTagClick}
      />
    </div>
  );
}

export default EventList;
