function TrendingHash({ pt, popularHash }) {
  const mginLft = pt ? "3%" : "21%";
  const mglft = pt ? "9%" : "27%";
  return (
    <div style={{ marginLeft: `${mginLft}` }} className="hashtag-container">
      <h2>Trending Hashtags</h2>
      <ul style={{ marginLeft: `${mglft}` }} className="hashtag-list">
        {popularHash.map((hash) => (
          <li key={hash.id}>#{hash.tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingHash;
