import { useSelector } from "react-redux";
import FooterSecondary from "./FooterSecondary";
import "../styles/profile.css";

function PostPhoto() {
  const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <>
      <div className="post-photo-container">
        <div className="header-section">
          <h1>Post a Photo</h1>
          <hr />
          <section className="photo-section-and-form">
            <img
              src={`${process.env.PUBLIC_URL}/foto-icon.png`}
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
                  type="text"
                  name="img_url"
                  id=""
                  placeholder="Add Photo Link"
                />
              </label>
              <label htmlFor="hashtags">
                <input type="text" name="hashtags" placeholder="Add Hashtags" />
              </label>
              <p style={{ margin: "-8px 0 35px 108px", fontSize: "smaller" }}>
                ** 3 minimum required **
              </p>
              <label htmlFor="confirm">
                <input id="confirm-button" type="button" value="confirm" />
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
