import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FooterSecondary from "../FooterSecondary";
import EventTypes from "./EventTypes";
import "../../styles/event.css";
import EventList from "./EventList";
import { showEvents } from "../../features/events/eventsSlice";

function SingleEventType() {
  let isEvents = useSelector((state) => state.events.isEvents);
  const dispatch = useDispatch();
  const params = useParams();

  function handleGoBack() {
    dispatch(showEvents(true));
  }

  return (
    <div>
      <main className="single-category-container">
        <section className="left-category-section">
          <EventTypes />
        </section>
        <section className="right-category-section">
          {!isEvents && (
            <button id="back-to-events-button" onClick={handleGoBack}>
              back to Events
            </button>
          )}
          <h2 id="event-category-title">
            <em>#{params.type}</em>
          </h2>
          <label htmlFor="search-events">
            <input
              type="text"
              placeholder="🔍  search events by hashtag... ex #dayparty"
            />
          </label>
          <hr
            style={{
              height: "1px",
              backgroundColor: "#ED4C4C",
              border: "none",
              width: "50%",
              margin: "3% 0",
              marginLeft: "-8px",
            }}
          />
          <EventList />
        </section>
      </main>
      <FooterSecondary />
    </div>
  );
}

export default SingleEventType;
