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
  const width = pt ? "125%" : "123%";
  // const bottom = !pt ? "-4%" : "-20%";

  let heart;
  function findFav() {
    if (!!event.id && favorites !== undefined && user) {
      heart = favorites.find((f) => f.event_id === event.id);
    }
    return heart;
  }
  // let currentDate = new Intl.DateTimeFormat("en-us", options).format();

  let options = { month: "short", day: "numeric" };
  const date = new Date(event.date.slice(0, 10));

  const modifiedDate = new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .split();

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
          <img
            src={event.img_url || `${process.env.PUBLIC_URL}/afrofete_logo.png`}
            alt="event-card"
          />
        </section>
        <section id="bottom-event-card-section">
          <div id="event-card-left-section">
            <p
              style={{
                fontWeight: "bolder",
                marginLeft: "12px",
                marginRight: "8px",
              }}
            >
              {modifiedDate[0]}
            </p>
            <p>{modifiedDate[1]}</p>
          </div>
          <div id="event-card-right-section">
            <section
              style={{ marginTop: `${mrgTp}` }}
              id="venue-name-and-likes"
            >
              <h3>{event.event_name}</h3>

              {!!!findFav() && heart === undefined && <p>🤍</p>}
              {!!findFav() && <p>🧡</p>}
            </section>
            <div
              style={{
                display: "flex",
                position: "relative",
                bottom: "-6%",
                flexDirection: "column",
              }}
            >
              <p style={{ marginBottom: "-11px", color: "gray" }}>
                {event.address}
              </p>
              <p style={{ color: "gray" }}>
                {event.city}, {event.state} {event.zip}
              </p>
            </div>
            <ul
              style={{
                marginLeft: "-91px",
                width: `${width}`,
                // position: "relative",
                // bottom: `${bottom}`,
              }}
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
