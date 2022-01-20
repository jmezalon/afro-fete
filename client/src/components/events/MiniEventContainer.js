import { fetchSingleTag, showEvents } from "../../features/events/eventsSlice";
import { useDispatch } from "react-redux";
import MiniEventCards from "./MiniEventCards";

function MiniEventContainer({
  pt,
  handleSingleEventClick,
  count,
  showLess,
  handleMoreClick,
  setCount,
  setShowLess,
  eventsToBeSorted,
  events,
  singleTag,
  id,
  tagId,
  tagSearch,
  foundSearchTag,
  handleTagClick,
}) {
  const marginLeft = pt ? "-29.5%" : "";
  const dispatch = useDispatch();

  let sortedEvents = [];

  if (count <= eventsToBeSorted.length) {
    for (let i = 0; i < count; i++) {
      sortedEvents.push(eventsToBeSorted[i]);
    }
  }

  if (!id) {
    sortedEvents.sort((a, b) => b.hash_count - a.hash_count);
  } else if (singleTag) {
    sortedEvents = singleTag;
  } else if (tagSearch.length > 2 && foundSearchTag) {
    dispatch(fetchSingleTag(foundSearchTag.id));
    dispatch(showEvents(true));
    console.log("ran");
  } else if (!tagSearch) {
    sortedEvents = events;
  } else {
    sortedEvents = events.filter(
      (event) => event.event_category_id === parseInt(id)
    );
  }

  return (
    <div className={pt ? "cat-mini-cards-container" : "mini-cards-container"}>
      <div className={pt ? "cat-event-list-container" : "event-list-container"}>
        {sortedEvents.map((event) => (
          <MiniEventCards
            key={event.id}
            event={event}
            pt={pt}
            handleSingleEventClick={handleSingleEventClick}
            tagId={tagId}
            tagSearch={tagSearch}
          />
        ))}
      </div>
      {sortedEvents.length >= count && !pt && !showLess && (
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
