import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EventTypes() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("/api/event_categories")
      .then((r) => r.json())
      .then(setTypes);
  }, []);

  const params = useParams();

  return (
    <div className={params.type ? "single-cat-container" : "types-container"}>
      {types.map((t) => (
        <Link
          key={t.id}
          to={`/category/${t.id}/${t.category.replace(/\s/g, "")}`}
        >
          <img alt="event-types" src={process.env.PUBLIC_URL + t.img_url} />
        </Link>
      ))}
    </div>
  );
}

export default EventTypes;
