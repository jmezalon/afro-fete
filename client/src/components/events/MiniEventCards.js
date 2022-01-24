import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/event.css";
import { fetchEvent, showEvents } from "../../features/events/eventsSlice";

function MiniEventCards({ event, pt, tagId }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const user = useSelector((state) => state.users.user);

  function onSingleEventClick(id) {
    dispatch(showEvents(false));
    dispatch(fetchEvent(id));
  }

  const mrgTp = pt ? "-10px" : "";
  const width = pt ? "125%" : "364px";

  let heart;
  function findFav() {
    if (!!event.id && favorites !== undefined && user) {
      heart = favorites.find((f) => f.event_id === event.id);
    }
    return heart;
  }

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

              {!!!findFav() && heart === undefined && <p>🤍</p>}
              {!!findFav() && <p>🧡</p>}
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
                <li
                  className={tagId === hash.id ? "selected-tag" : ""}
                  key={hash.id}
                >
                  #{hash.tag}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Link>
    </div>
  );
}

export default MiniEventCards;

// history.push(
//   `/category/${
//     singleTag.events[0].event_category.id
//   }/${singleTag.events[0].event_category.category
//     .replace(/\s/g, "")
//     .toLowerCase()}`
//   //   `/category/${
//   //     singleTag.events[0].event_category.id
//   //   }/${singleTag[0].event_category.category
//   //     .replace(/\s/g, "")
//   //     .toLowerCase()}`
// );
// dispatch(showEvents(true));
