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
  id,
}) {
  const marginLeft = pt ? "-29.5%" : "";

  let sortedEvents = [];

  if (count <= eventsToBeSorted.length) {
    for (let i = 0; i < count; i++) {
      sortedEvents.push(eventsToBeSorted[i]);
    }
  }

  if (!id) {
    sortedEvents.sort((a, b) => b.hash_count - a.hash_count);
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
