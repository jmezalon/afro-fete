import "../styles/footer.css";

function FooterSecondary() {
  return (
    <footer className="footer-secondary-container">
      <p>Stay up to date with the latest events!</p>
      <form action="date-information">
        <label htmlFor="email">
          <input type="text" placeholder="Email Address" />
        </label>
        <button>Send</button>
      </form>
    </footer>
  );
}

export default FooterSecondary;
