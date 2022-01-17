import "../../styles/event.css";

function MiniEventCards({ event }) {
  console.log(event.date);
  return (
    <div className="card-container">
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
          <p>hashtag list here</p>
        </div>
      </section>
    </div>
  );
}

export default MiniEventCards;
