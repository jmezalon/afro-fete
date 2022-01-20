import { fetchEvent, fetchEvents } from "../../features/events/eventsSlice";
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
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const filterTags = popularHash.filter((tag) => tag.events.length > 2);

  // function handleTagClick(id) {
  //   fetch("/api/hashtags/" + id)
  //     .then((r) => r.json())
  //     .then(setSingleTag);
  // }

  useEffect(() => {
    fetch("/api/hashtags")
      .then((r) => r.json())
      .then(setPopularHash);
  }, []);

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
          id={params.id}
        />
      ) : (
        <EventCard event={singleEvent} />
      )}
      <hr style={{ marginLeft: `${marginLeftHr}`, marginBottom: "6%" }} />
      <TrendingHash popularHash={filterTags} pt={params.type} />
    </div>
  );
}

export default EventList;
