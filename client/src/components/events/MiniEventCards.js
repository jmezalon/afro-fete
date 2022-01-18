import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../styles/event.css";
import { showEvents } from "../../features/events/eventsSlice";

function MiniEventCards({ event, handleSingleEventClick }) {
  const dispatch = useDispatch();

  function onSingleEventClick(id) {
    dispatch(showEvents(false));
    handleSingleEventClick(id);
  }

  // console.log(event.hashtags);

  return (
    <div
      className="card-container"
      onClick={() => onSingleEventClick(event.id)}
    >
      <Link
        to={`/category/${event.id}/${event.event_category.category
          .replace(/\s/g, "")
          .toLowerCase()}`}
      >
        <section>
          <img src={event.img_url} alt="event-card" />
        </section>
        <section id="bottom-event-card-section">
          <div id="event-card-left-section">date</div>
          <div id="event-card-right-section">
            <section id="venue-name-and-likes">
              <h2>{event.venue_name}</h2>

              <p>likes</p>
            </section>
            <p>address here</p>
            <ul style={{ marginLeft: "-85px" }} className="hashtag-list">
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
