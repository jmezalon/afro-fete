import "../../styles/event.css";

function EventCard({ event, tagId, handleTagClick }) {
  //   console.log(event.date);

  return (
    <div className="single-card-container">
      <section>
        <img src={event.img_url} alt="event-card" />
      </section>
      <section id="single-bottom-event-card-section">
        <div id="single-event-card-left-section">date</div>
        <div id="single-event-card-right-section">
          <section id="single-venue-name-and-likes">
            <h2>{event.venue_name}</h2>

            <p>🤍</p>
          </section>
          <>
            <p style={{ marginBottom: "-11px", color: "gray" }}>
              {event.address} • {event.city}, {event.state} {event.zip}
            </p>
          </>
          <h2 style={{ marginBottom: "-15px" }}>Description</h2>
          <p>{event.description}</p>
          <ul className="single-event-hashtag-list">
            {event.hashtags &&
              event.hashtags.map((hash) => (
                <li
                  onClick={() => handleTagClick(hash.id)}
                  className={tagId === hash.id ? "selected-tag" : ""}
                  key={hash.tag}
                >
                  #{hash.tag}
                </li>
              ))}
          </ul>
          <button id="buy-ticket-button">Buy Tickects</button>
        </div>
      </section>
    </div>
  );
}

export default EventCard;
