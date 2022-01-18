import EventTypes from "./EventTypes";
import "../../styles/landing.css";
import FooterSecondary from "../FooterSecondary";
import EventList from "./EventList";

function Landing() {
  return (
    <div className="landing-container">
      <header>
        <section>
          <h3>
            Making memories is only a <em>#hashtag</em> away!
          </h3>
          <button>learn more</button>
        </section>
        <img
          id="header-img"
          src={process.env.PUBLIC_URL + "/landing-header-img.png"}
          alt="gallery-icon"
        />
      </header>
      <main>
        <section>
          <h6>Choose Your Vibe!</h6>
          <EventTypes />
        </section>
        <hr />
        <section>
          <EventList />
        </section>
        <hr />
        <section>
          {/* turn this into a component so singleeventtype could use it */}
          <p>Trending Hashtags</p>
        </section>
      </main>
      <FooterSecondary />
    </div>
  );
}

export default Landing;
