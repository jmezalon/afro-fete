function TrendingHash({ pt, popularHash = [] }) {
  const mginLft = pt ? "-36%" : "";
  return (
    <div style={{ marginLeft: `${mginLft}` }} className="hashtag-container">
      <h2>Trending Hashtags</h2>
      <ul className="hashtag-list">
        {popularHash.map((hash) => (
          <li key={hash.id}>#{hash.tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingHash;
