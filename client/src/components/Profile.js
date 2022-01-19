import { useSelector } from "react-redux";
import FooterSecondary from "./FooterSecondary";
import "../styles/profile.css";

function Profile() {
  const user = useSelector((state) => state.users.user);
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
                  id=""
                  placeholder={user && user.username}
                />
              </label>
              <label htmlFor="full_name">
                <input
                  type="text"
                  name="full_name"
                  id=""
                  placeholder={user && user.full_name}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="change password"
                />
              </label>
              <label htmlFor="password_confirmation">
                <input
                  type="password"
                  name="password_confirmation"
                  id=""
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
            <div>
              <p>has the favorites and will need to srcoll to the left</p>
            </div>
          </section>
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

export default Profile;
