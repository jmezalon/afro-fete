import { useSelector, useDispatch } from "react-redux";
import FooterSecondary from "./FooterSecondary";
import "../styles/profile.css";
import MiniEventCards from "./events/MiniEventCards";
import {
  fetchFavorites,
  resetFavorite,
} from "../features/favorites/favoritesSlice";
import { useEffect } from "react";
import Myphotos from "./Myphotos";
import {
  fetchUserGalleries,
  resetPopularGalleries,
} from "../features/galleries/galleriesSlice";

function Profile() {
  const user = useSelector((state) => state.users.user);
  const myPhotos = useSelector((state) => state.galleries.myPhotos);
  const favorites = useSelector((state) => state.favorites.favorites);
  const events = useSelector((state) => state.events.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      // user &&
      dispatch(fetchFavorites());
      dispatch(fetchUserGalleries());
    }
    return () => {
      dispatch(resetFavorite());
      dispatch(resetPopularGalleries());
    };
  }, [dispatch, user]);

  let favList = events.filter((e) =>
    favorites.find((f) => f.event_id === e.id)
  );

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
            <form action="user-profile">
              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  placeholder={user && user.username}
                />
              </label>
              <label htmlFor="full_name">
                <input
                  type="text"
                  name="full_name"
                  placeholder={user && user.full_name}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  placeholder="change password"
                />
              </label>
              <label htmlFor="password_confirmation">
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="confirm password"
                />
              </label>
              <label htmlFor="save">
                <input id="save-button" type="button" value="Save" />
              </label>
            </form>
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
          <section id="photo-posted">
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

export default Profile;
