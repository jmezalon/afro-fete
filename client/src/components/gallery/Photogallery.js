import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FooterSecondary from "../FooterSecondary";
import {
  fetchGalleries,
  resetPopularGalleries,
} from "../../features/galleries/galleriesSlice";
import "../../styles/gallery.css";
import Photolist from "./Photolist";

function Photogallery() {
  const user = useSelector((state) => state.users.user);
  const photos = useSelector((state) => state.galleries.galleries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      user && dispatch(fetchGalleries());
    }
    return () => {
      dispatch(resetPopularGalleries());
    };
  }, [dispatch, user]);

  let sortedPhotos = [...photos];

  sortedPhotos.sort((a, b) => b.hashtags.length - a.hashtags.length);

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      <hr />
      <div className="photo-list-container">
        {sortedPhotos.map((p) => (
          <Photolist key={p.id} photo={p} />
        ))}
      </div>
      <FooterSecondary />
    </div>
  );
}

export default Photogallery;
