// import { Link } from "react-router-dom";

function TrendingHash({ pt, tagId, popularHash, handleTagClick }) {
  const mginLft = pt ? "3%" : "21%";
  const mglft = pt ? "9%" : "27%";

  return (
    <div style={{ marginLeft: `${mginLft}` }} className="hashtag-container">
      <h2>Trending Hashtags</h2>
      <ul style={{ marginLeft: `${mglft}` }} className="hashtag-list">
        {popularHash.map((hash) => (
          <li
            className={tagId === hash.id ? "selected-tag" : ""}
            onClick={() => handleTagClick(hash.id)}
            key={hash.id}
          >
            #{hash.tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingHash;
