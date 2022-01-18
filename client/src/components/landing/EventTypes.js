import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showEvents } from "../../features/events/eventsSlice";

function EventTypes() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("/api/event_categories")
      .then((r) => r.json())
      .then(setTypes);
  }, []);

  const params = useParams();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(showEvents(true))}
      className={params.type ? "single-cat-container" : "types-container"}
    >
      {types.map((t) => (
        <Link
          key={t.id}
          to={`/category/${t.id}/${t.category
            .replace(/\s/g, "")
            .toLowerCase()}`}
        >
          <img alt="event-types" src={process.env.PUBLIC_URL + t.img_url} />
        </Link>
      ))}
    </div>
  );
}

export default EventTypes;
