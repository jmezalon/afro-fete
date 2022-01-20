import {
  fetchSingleTag,
  resetSingleTag,
} from "../../features/events/eventsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import MiniEventCards from "./MiniEventCards";

function MiniEventContainer({
  pt,
  handleSingleEventClick,
  eventsToBeSorted,
  events,
  singleTag,
  tagId,
  foundSearchTag,
  setId,
}) {
  let [count, setCount] = useState(3);
  let [showLess, setShowLess] = useState(false);

  const marginLeft = pt.type ? "-29.5%" : "";
  const dispatch = useDispatch();

  let sortedEvents = [];

  useEffect(() => {
    if (foundSearchTag && foundSearchTag.id) {
      dispatch(fetchSingleTag(foundSearchTag.id));
      setId(foundSearchTag.id);
    } else if (!foundSearchTag) {
      dispatch(resetSingleTag({}));
    }
  }, [dispatch, foundSearchTag, setId]);

  if (count <= eventsToBeSorted.length) {
    for (let i = 0; i < count; i++) {
      sortedEvents.push(eventsToBeSorted[i]);
    }
  }

  if (!pt.id) {
    sortedEvents.sort((a, b) => b.hash_count - a.hash_count);
  } else if (singleTag) {
    sortedEvents = singleTag;
  } else {
    sortedEvents = events.filter(
      (event) => event.event_category_id === parseInt(pt.id)
    );
  }

  function handleMoreClick() {
    if (count + 3 <= eventsToBeSorted.length) {
      setCount(count + 3);
    } else {
      setCount(eventsToBeSorted.length);
      setShowLess(true);
    }
  }

  return (
    <div
      className={pt.type ? "cat-mini-cards-container" : "mini-cards-container"}
    >
      <div
        className={
          pt.type ? "cat-event-list-container" : "event-list-container"
        }
      >
        {sortedEvents.map((event) => (
          <MiniEventCards
            key={event.id}
            event={event}
            pt={pt.type}
            handleSingleEventClick={handleSingleEventClick}
            tagId={tagId}
          />
        ))}
      </div>
      {sortedEvents.length >= count && !pt.type && !showLess && (
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
  );
}

export default MiniEventContainer;
