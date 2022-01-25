import { useSelector, useDispatch } from "react-redux";
import FooterSecondary from "../FooterSecondary";
import "../../styles/profile.css";
import MiniEventCards from "../events/MiniEventCards";
import {
  fetchFavorites,
  resetFavorite,
} from "../../features/favorites/favoritesSlice";
import { useEffect } from "react";
import Myphotos from "./Myphotos";
import {
  fetchUserGalleries,
  resetMyphotos,
  resetMyGalleries,
} from "../../features/galleries/galleriesSlice";
import { Link } from "react-router-dom";
import EdituserForm from "./EdituserForm";

function Profile() {
  const user = useSelector((state) => state.users.user);
  const myPhotos = useSelector((state) => state.galleries.myPhotos);
  const favorites = useSelector((state) => state.favorites.favorites);
  const events = useSelector((state) => state.events.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      user && dispatch(fetchFavorites());
      dispatch(fetchUserGalleries());
    }
    return () => {
      dispatch(resetFavorite());
      dispatch(resetMyGalleries());
      dispatch(resetMyphotos());
    };
  }, [dispatch, user]);

  let favList = events.filter((e) =>
    favorites.find((f) => f.event_id === e.id)
  );

  const height = myPhotos.length <= 3 ? "472px" : "830px";

  // put the form in their own components, for profile and post a photo

  return (
    <>
      <div className="profile-container">
        <div className="header-section">
          <h1>Profile</h1>
          <hr />
          <section className="user-info">
            <>
              <img
                src={
                  `${process.env.PUBLIC_URL}/avatar-placeholder.png` ||
                  (user && user.avatar)
                }
                alt="avatar"
              />
              <img
                id="edit-icon"
                src={`${process.env.PUBLIC_URL}/edit.png`}
                alt="edit-icon"
              />
            </>
            <EdituserForm />
          </section>
        </div>
        <main>
          <section id="favorite-container">
            <p>Favorites</p>
            <div className="fav-list-container">
              {favList.map((f) => (
                <MiniEventCards key={f.id} event={f} />
              ))}
            </div>
          </section>
          <section style={{ height: `${height}` }} className="photo-posted">
            <p>Photo Posted</p>
            <div className="photo-posted-container">
              {myPhotos.length !== 0 ? (
                myPhotos.map((p) => <Myphotos key={p.id} photo={p} />)
              ) : (
                <p style={{ margin: "auto" }}>
                  <Link to={"/post-a-photo"}>Post some picture</Link> to some
                  events you have attend!
                </p>
              )}
            </div>
          </section>
        </main>
      </div>
      <FooterSecondary />
    </>
  );
}

export default Profile;
