import "../../styles/event.css";
import { useSelector, useDispatch } from "react-redux";
import { onAddFav, onDeleteFav } from "../../features/favorites/favoritesSlice";
import { useState } from "react";

function EventCard({ event, tagId, handleTagClick }) {
  //   console.log(event.date);
  const [errors, setErrors] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const user = useSelector((state) => state.users.user);

  function deleteFav(id) {
    let favId = favorites.find((f) => f.event_id === id);
    fetch(`/api/favorites/${favId.id}`, {
      method: "DELETE",
    }).then(() => dispatch(onDeleteFav(favId.id)));
  }

  let heart;
  function findFav() {
    if (!!event.id && user && favorites !== undefined) {
      heart = favorites.find((f) => f.event_id === event.id);
    }
    return heart;
  }

  function handlePostLike(id) {
    user &&
      fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ event_id: id }),
      })
        .then((r) => r.json())
        .then((data) => dispatch(onAddFav(data)));

    if (!user) {
      setErrors(true);
      clearError();
    }
  }

  function clearError() {
    const id = setTimeout(() => {
      setErrors(false);
    }, 2000);
    return () => clearTimeout(id);
  }

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

            {!!!findFav() && heart === undefined && (
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handlePostLike(event.id)}
              >
                🤍
              </p>
            )}
            {!!findFav() && (
              <p
                style={{ cursor: "pointer" }}
                onClick={() => deleteFav(event.id)}
              >
                🧡
              </p>
            )}
          </section>
          {errors ? (
            <p style={{ color: "red" }}>Sign up to add to favorites!</p>
          ) : (
            ""
          )}
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
