import {
  fetchEvents,
  fetchSingleTag,
  showEvents,
} from "../../features/events/eventsSlice";
import { useEffect, useState } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/event.css";
import EventCard from "./EventCard";
import TrendingHash from "./TrendingHash";
import MiniEventContainer from "./MiniEventContainer";
import {
  fetchFavorites,
  resetFavorite,
} from "../../features/favorites/favoritesSlice";

function EventList({ tagSearch }) {
  const events = useSelector((state) => state.events.entities);
  const isEvents = useSelector((state) => state.events.isEvents);
  const singleEvent = useSelector((state) => state.events.event);
  const user = useSelector((state) => state.users.user);
  const singleTag = useSelector((state) => state.events.singleTag);
  const [id, setId] = useState("");

  const [popularHash, setPopularHash] = useState([]);

  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchEvents());
    if (match.url === "/") {
      dispatch(showEvents(true));
    }
  }, [dispatch, match.url]);

  useEffect(() => {
    fetch("/api/hashtags")
      .then((r) => r.json())
      .then(setPopularHash);
  }, []);

  useEffect(() => {
    if (user) {
      user && dispatch(fetchFavorites());
    } else {
      dispatch(resetFavorite());
    }
  }, [user, dispatch]);

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
