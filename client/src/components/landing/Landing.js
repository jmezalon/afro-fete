import EventTypes from "./EventTypes";
import "../../styles/landing.css";
import FooterSecondary from "../FooterSecondary";
import EventList from "./EventList";

function Landing() {
  const calenderFilter = ["TODAY", "TOMORROW", "THIS WEEKEND", "THIS MONTH"];
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
          <ul className="calender-filter">
            {calenderFilter.map((day) => (
              <li key={day}>{day}</li>
            ))}
          </ul>
          <EventList />
        </section>
        <hr />
        <section>
          <p>Trending Hashtags</p>
        </section>
      </main>
      <FooterSecondary />
    </div>
  );
}

export default Landing;
