import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import FooterSecondary from "../FooterSecondary";
import EventTypes from "./EventTypes";
import "../../styles/event.scss";
import EventList from "./EventList";
import { showEvents } from "../../features/events/eventsSlice";
import { resetSingleTag } from "../../features/hashtags/hashtagsSlice";

function SingleEventType() {
  const [tagSearch, setTagSearch] = useState("");
  let isEvents = useSelector((state) => state.events.isEvents);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  function handleGoBack() {
    dispatch(showEvents(true));
  }

  function goBackClick() {
    dispatch(resetSingleTag());
    history.push("/");
  }

  return (
    <div>
      <main className="single-category-container">
        <section className="left-category-section mobile-display-none">
          <EventTypes />
        </section>
        <section className="right-category-section">
          {!isEvents ? (
            <button id="back-to-events-button" onClick={handleGoBack}>
              back to Events
            </button>
          ) : (
            <button id="back-to-event-category" onClick={() => goBackClick()}>
              Back
            </button>
          )}
          <h2 id="event-category-title">
            <em>#{params.type}</em>
          </h2>
          <label htmlFor="search-events">
            <input
              type="text"
              value={tagSearch}
              onChange={(e) => setTagSearch(e.target.value)}
              onBlur={() => setTagSearch("")}
              placeholder="🔍  search events by hashtag... ex #dayparty"
              className="mobile-display-none"
            />
          </label>
          <hr
            className="mobile-display-none"
            style={{
              height: "1px",
              backgroundColor: "#ED4C4C",
              border: "none",
              width: "50%",
              margin: "25px auto",
            }}
          />

          <hr
            className="webpage-display-none"
            style={{
              height: "1px",
              backgroundColor: "#ED4C4C",
              border: "none",
              width: "81%",
              margin: "25px auto",
            }}
          />
          <div className="event-list--and-ul-container">
            <EventList tagSearch={tagSearch} />
          </div>
        </section>
      </main>
      <FooterSecondary />
    </div>
  );
}

export default SingleEventType;
