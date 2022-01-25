function Photolist({ photo }) {
  return (
    <div className="gallery-card">
      <img src={photo.img_url} alt={`${photo.id}-pics`} />
      <ul className="gallery-hashtag-list">
        {photo.hashtags.map((hash) => (
          <li style={{ color: "#ed4c4c" }} key={hash.id}>
            #{hash.tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photolist;
