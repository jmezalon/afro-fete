import {
  fetchEvent,
  fetchEvents,
  fetchSingleTag,
  showEvents,
} from "../../features/events/eventsSlice";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/event.css";
import EventCard from "./EventCard";
import TrendingHash from "./TrendingHash";
import MiniEventContainer from "./MiniEventContainer";

function EventList({ tagSearch, setTagSearch }) {
  const events = useSelector((state) => state.events.entities);
  const isEvents = useSelector((state) => state.events.isEvents);
  const singleEvent = useSelector((state) => state.events.event);
  const singleTag = useSelector((state) => state.events.singleTag);
  const [id, setId] = useState("");

  const [popularHash, setPopularHash] = useState([]);
  // let [count, setCount] = useState(3);
  // let [showLess, setShowLess] = useState(false);

  const history = useHistory();
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

  useEffect(() => {
    if (!params.id && singleTag.events) {
      history.push(
        `/category/${
          singleTag.events[0].event_category.id
        }/${singleTag.events[0].event_category.category
          .replace(/\s/g, "")
          .toLowerCase()}`
      );
    }
  }, [history, params.id, singleTag]);

  const filterTags = popularHash.filter((tag) => tag.events.length > 2);

  function cleanWord(word) {
    let noHashword;
    if (word.split("").includes("#")) {
      noHashword = word.slice(1, word.length);
    } else {
      noHashword = word;
    }
    return noHashword;
  }

  let foundSearchTag = {};

  if (tagSearch && tagSearch.length > 2) {
    foundSearchTag = popularHash.find((t) => {
      return t.tag.toLowerCase().includes(cleanWord(tagSearch).toLowerCase());
    });
  }

  useEffect(() => {
    if (tagSearch) {
      dispatch(showEvents(true));
    }
  }, [dispatch, tagSearch]);

  function handleTagClick(id) {
    setId(id);
    dispatch(fetchSingleTag(id));
    if (!isEvents) {
      dispatch(showEvents(true));
    }
  }

  const eventsToBeSorted = [...events];

  const calenderFilter = ["TODAY", "TOMORROW", "THIS WEEKEND", "THIS MONTH"];

  function handleSingleEventClick(id) {
    dispatch(fetchEvent(id));
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
          pt={params}
          handleSingleEventClick={handleSingleEventClick}
          events={events}
          eventsToBeSorted={eventsToBeSorted}
          singleTag={singleTag.events}
          tagId={id}
          setId={setId}
          foundSearchTag={foundSearchTag}
          handleTagClick={handleTagClick}
        />
      ) : (
        <EventCard
          event={singleEvent}
          handleTagClick={handleTagClick}
          tagId={id}
          tagSearch={tagSearch}
        />
      )}
      <hr style={{ marginLeft: `${marginLeftHr}`, marginBottom: "6%" }} />
      <TrendingHash
        popularHash={filterTags}
        pt={params.type}
        handleTagClick={handleTagClick}
        tagId={id}
      />
    </div>
  );
}

export default EventList;
