import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FooterSecondary from "./FooterSecondary";
import "../styles/profile.css";
import {
  fetchHashtags,
  resetPopularHash,
  // fetchSingleTag,
} from "../features/hashtags/hashtagsSlice";

function PostPhoto() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.users.user);
  const hashtags = useSelector((state) => state.hashtags.hashtags);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [tagLeft, setTagLeft] = useState(3);
  const [invalidSubmit, setInvalidSubmit] = useState(false);
  const [img_url, setImg_url] = useState("");

  useEffect(() => {
    dispatch(fetchHashtags());
    if (tagLeft <= 0) {
      setInvalidSubmit(false);
    }
    return () => {
      dispatch(resetPopularHash());
    };
  }, [dispatch, tagLeft]);

  let availableHash = hashtags.filter((tag) =>
    tag.tag.toLowerCase().includes(tagInput.toLowerCase())
  );

  function handleDeleteTag(id) {
    const updateTag = tags.filter((t) => t.id !== id);
    setTags(updateTag);
  }

  function handlePhotoTagPost(photoId) {
    while (tags.length) {
      let tagId = tags.pop().id;
      fetch("/api/gallery_tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gallery_id: photoId, hashtag_id: tagId }),
      });
    }
  }

  function handlePhotoSubmit(e) {
    e.preventDefault();
    if (img_url) {
      fetch("/api/galleries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img_url }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            handlePhotoTagPost(data.id);
            setImg_url("");
            setTags([]);
          });
        }
      });
    } else {
      setInvalidSubmit(true);
    }
  }

  function handleTagSubmit() {
    if (tagInput.toLowerCase() === availableHash[0].tag) {
      setTags([...tags, availableHash[0]]);
      setTagInput("");
      setTagLeft(() => tagLeft - 1);
    }
  }

  const displayNone = tagLeft <= 0 ? "none" : "block";

  return (
    <>
      <div className="post-photo-container">
        <div className="header-section">
          <h1>Post a Photo</h1>
          <hr />
          <section className="photo-section-and-form">
            <img
              src={img_url || `${process.env.PUBLIC_URL}/foto-icon.png`}
              alt="camara-placeholder"
            />
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
                      !img_url && invalidSubmit
                        ? "1px solid red"
                        : "1px solid black",
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
                    tagLeft <= 0
                      ? handlePhotoSubmit(e)
                      : setInvalidSubmit(true);
                  }}
                  id="confirm-button"
                  type="button"
                  value="confirm"
                />
              </label>
            </form>
          </section>
        </div>
        <main>
          <section id="photo-posted">
            <p>Photo Posted</p>
            <div>
              <p>will have a list of photos posted, scroll to the botoom</p>
            </div>
          </section>
        </main>
      </div>
      <FooterSecondary />
    </>
  );
}

export default PostPhoto;
