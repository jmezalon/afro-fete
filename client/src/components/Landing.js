import EventTypes from "./events/EventTypes";
import "../styles/landing.scss";
import FooterSecondary from "./FooterSecondary";
import EventList from "./events/EventList";

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
      </main>
      <FooterSecondary />
    </div>
  );
}

export default Landing;
