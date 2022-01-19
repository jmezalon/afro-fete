import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../styles/event.css";
import { showEvents } from "../../features/events/eventsSlice";

function MiniEventCards({ event, handleSingleEventClick, pt }) {
  const dispatch = useDispatch();

  function onSingleEventClick(id) {
    dispatch(showEvents(false));
    handleSingleEventClick(id);
  }

  const mrgTp = pt ? "-11px" : "";
  const width = pt ? "125%" : "364px";

  return (
    <div
      className="card-container"
      onClick={() => onSingleEventClick(event.id)}
    >
      <Link
        to={`/category/${
          event.event_category.id
        }/${event.event_category.category.replace(/\s/g, "").toLowerCase()}`}
      >
        <section>
          <img src={event.img_url} alt="event-card" />
        </section>
        <section id="bottom-event-card-section">
          <div id="event-card-left-section">date</div>
          <div id="event-card-right-section">
            <section
              style={{ marginTop: `${mrgTp}` }}
              id="venue-name-and-likes"
            >
              <h2>{event.venue_name}</h2>

              <p>🤍</p>
            </section>
            <>
              <p style={{ marginBottom: "-11px", color: "gray" }}>
                {event.address}
              </p>
              <p style={{ color: "gray" }}>
                {event.city}, {event.state} {event.zip}
              </p>
            </>
            <ul
              style={{ marginLeft: "-90px", width: `${width}` }}
              className="hashtag-list"
            >
              {event.hashtags.map((hash) => (
                <li key={hash.id}>#{hash.tag}</li>
              ))}
            </ul>
          </div>
        </section>
      </Link>
    </div>
  );
}

export default MiniEventCards;
