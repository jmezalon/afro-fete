function TrendingHash({ pt, tagId, popularHash, handleTagClick }) {
  const mginLft = pt ? "0" : "5%";

  return (
    <div style={{ marginLeft: `${mginLft}` }} className="hashtag-container">
      <h2>Trending Hashtags</h2>
      <ul className="hashtag-container__hashtag-list">
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
