import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FooterSecondary from "../FooterSecondary";
import "../../styles/profile.scss";
import {
  fetchHashtags,
  resetPopularHash,
  // fetchSingleTag,
} from "../../features/hashtags/hashtagsSlice";
import Myphotos from "./Myphotos";
import {
  fetchUserGalleries,
  onPhotoAdd,
  resetPopularGalleries,
} from "../../features/galleries/galleriesSlice";
import PostphotoForm from "./PostphotoForm";

function PostPhoto() {
  const myPhotos = useSelector((state) => state.galleries.myPhotos);
  const [invalidSubmit, setInvalidSubmit] = useState(false);
  const [tagLeft, setTagLeft] = useState(3);
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [img_url, setImg_url] = useState("");

  useEffect(() => {
    dispatch(fetchHashtags());
    dispatch(fetchUserGalleries());
    if (tagLeft <= 0) {
      setInvalidSubmit(false);
    }
    return () => {
      dispatch(resetPopularHash());
      dispatch(resetPopularGalleries());
    };
  }, [dispatch, tagLeft]);

  function handlePhotoTagPost(photoId) {
    while (tags.length) {
      let tagId = tags.pop().id;
      fetch("/api/gallery_tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gallery_id: photoId, hashtag_id: tagId }),
      }).then(() => dispatch(fetchUserGalleries()));
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
            dispatch(onPhotoAdd(data));
            setImg_url("");
            setTags([]);
          });
        }
      });
    } else {
      setInvalidSubmit(true);
    }
  }

  const height = myPhotos.length <= 3 ? "472px" : "830px";

  return (
    <>
      <div className="post-photo-container">
        <div className="header-section">
          <h1>Post a Photo</h1>
          <hr />
          <section className="photo-section-and-form">
            <img
              className="mobile-display-none"
              src={img_url || `${process.env.PUBLIC_URL}/foto-icon.png`}
              alt="camara-placeholder"
            />
            <PostphotoForm
              setTagLeft={setTagLeft}
              tagLeft={tagLeft}
              tags={tags}
              setTags={setTags}
              img_url={img_url}
              setImg_url={setImg_url}
              invalidSubmit={invalidSubmit}
              setInvalidSubmit={setInvalidSubmit}
              handlePhotoSubmit={handlePhotoSubmit}
            />
          </section>
        </div>
        <main>
          <section style={{ height: `${height}` }} className="photo-posted">
            <p>Photo Posted</p>
            <div className="photo-posted-container">
              {myPhotos.map((p) => (
                <Myphotos key={p.id} photo={p} />
              ))}
            </div>
          </section>
        </main>
      </div>
      <FooterSecondary />
    </>
  );
}

export default PostPhoto;
