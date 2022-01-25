import { useState } from "react";
import { useSelector } from "react-redux";

function PostphotoForm({
  setTags,
  tags,
  setTagLeft,
  tagLeft,
  img_url,
  setImg_url,
  invalidSubmit,
  setInvalidSubmit,
  handlePhotoSubmit,
}) {
  const hashtags = useSelector((state) => state.hashtags.hashtags);
  const [tagInput, setTagInput] = useState("");

  let availableHash = hashtags.filter((tag) =>
    tag.tag.toLowerCase().includes(tagInput.toLowerCase())
  );

  function handleTagSubmit() {
    if (tagInput.toLowerCase() === availableHash[0].tag) {
      setTags([...tags, availableHash[0]]);
      setTagInput("");
      setTagLeft(() => tagLeft - 1);
    }
  }

  function handleDeleteTag(id) {
    const updateTag = tags.filter((t) => t.id !== id);
    setTags(updateTag);
  }

  const displayNone = tagLeft <= 0 ? "none" : "block";

  return (
    <form action="post-photo-form">
      <label htmlFor="upload">
        <input
          id="upload-button"
          type="button"
          name="upload"
          value="Upload Photo"
        />
      </label>
      <label htmlFor="photo-link">
        <input
          style={{
            border:
              !img_url && invalidSubmit ? "1px solid red" : "1px solid black",
          }}
          type="text"
          name="img_url"
          onChange={(e) => setImg_url(e.target.value)}
          value={img_url}
          placeholder="Add Photo Link"
        />
      </label>
      <div className="selected-tags-container">
        {tags.length > 0 &&
          tags.map((t) => (
            <div className="selected-tags" key={t.id}>
              <p>#{t.tag}</p>
              <p
                id="delete-tag"
                onClick={() => {
                  handleDeleteTag(t.id);
                  setTagLeft(() => tagLeft + 1);
                }}
              >
                x
              </p>
            </div>
          ))}
      </div>
      <label htmlFor="hashtags">
        <input
          type="text"
          name="hashtags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyPress={(e) => {
            availableHash[0] && e.key === "Enter" && handleTagSubmit();
          }}
          placeholder="Add Hashtags"
        />
      </label>
      <div className="available-tag">
        {tagInput.length >= 2 &&
          availableHash.map((t) => (
            <li
              onClick={() => {
                setTags([...tags, t]);
                setTagInput("");
                setTagLeft(() => tagLeft - 1);
              }}
              key={t.id}
            >
              {t.tag}
            </li>
          ))}
      </div>
      {tags.length === 0 && !tagInput ? (
        <p
          style={{
            color: invalidSubmit ? "red" : "black",
            margin: "-8px 0 35px 108px",
            fontSize: "smaller",
          }}
        >
          ** 3 minimum required **
        </p>
      ) : (
        <p
          style={{
            color: invalidSubmit ? "red" : "black",
            margin: "-8px 0 35px 108px",
            fontSize: "smaller",
            display: `${displayNone}`,
          }}
        >
          ** {tagLeft} remaining **
        </p>
      )}
      <label htmlFor="confirm">
        <input
          onClick={(e) => {
            tagLeft <= 0 ? handlePhotoSubmit(e) : setInvalidSubmit(true);
          }}
          id="confirm-button"
          type="button"
          value="confirm"
        />
      </label>
    </form>
  );
}

export default PostphotoForm;
