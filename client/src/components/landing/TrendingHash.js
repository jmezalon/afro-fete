function TrendingHash({ pt }) {
  const mginLft = pt ? "-36%" : "";
  return (
    <div style={{ marginLeft: `${mginLft}` }} className="hashtag-container">
      <h2>Trending Hashtags</h2>
      <ul className="hashtag-list">
        <li>the list</li>
        <li>will be</li>
        <li>here with a #</li>
      </ul>
    </div>
  );
}

export default TrendingHash;
