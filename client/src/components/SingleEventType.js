import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FooterSecondary from "./FooterSecondary";
import EventTypes from "./landing/EventTypes";
import "../styles/event.css";
import EventList from "./landing/EventList";

function SingleEventType() {
  const events = useSelector((state) => state.events.entities);
  const params = useParams();

  return (
    <div>
      <main className="single-category-container">
        <section className="left-category-section">
          <EventTypes />
        </section>
        <section className="right-category-section">
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
