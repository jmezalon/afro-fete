import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventTypes() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("/api/event_categories")
      .then((r) => r.json())
      .then(setTypes);
  }, []);

  return (
    <div className="types-container">
      {types.map((t) => (
        <Link key={t.id} to={"/category/" + t.id}>
          <img alt="event-types" src={process.env.PUBLIC_URL + t.img_url} />
        </Link>
      ))}
    </div>
  );
}

export default EventTypes;
