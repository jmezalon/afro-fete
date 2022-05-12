function Myphotos({ photo }) {
  return (
    <div className="photo-card">
      <img src={photo.img_url} alt={`${photo.id}-pic`} />
      <ul className="hashtag-container__hashtag-list">
        {photo.hashtags.map((hash) => (
          <li style={{ color: "white" }} key={hash.id}>
            #{hash.tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Myphotos;
